interface SchemaField {
  type: 'string' | 'number' | 'boolean' | 'date' | 'enum' | 'array';
  format?: string;
  min?: number;
  max?: number;
  values?: any[];
  items?: SchemaField;
  pattern?: string;
  length?: number;
}

export interface Schema {
  [key: string]: SchemaField;
}

function generateFieldValue(field: SchemaField): any {
  switch (field.type) {
    case 'string':
      if (field.pattern) {
        const { generatePatternBasedString } = require('./patternGenerator');
        return generatePatternBasedString(field.pattern);
      }
      if (field.length) {
        return Array(field.length)
          .fill(0)
          .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
          .join('');
      }
      return 'sample-string';

    case 'number':
      const min = field.min ?? 0;
      const max = field.max ?? 100;
      return Math.floor(Math.random() * (max - min + 1)) + min;

    case 'boolean':
      return Math.random() > 0.5;

    case 'date':
      if (field.format === 'iso') {
        return new Date(
          Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
        ).toISOString();
      }
      return new Date(
        Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
      ).toLocaleDateString();

    case 'enum':
      if (!field.values || field.values.length === 0) {
        throw new Error('Enum type requires values array');
      }
      return field.values[Math.floor(Math.random() * field.values.length)];

    case 'array':
      if (!field.items) {
        throw new Error('Array type requires items schema');
      }
      const count = field.length || Math.floor(Math.random() * 5) + 1;
      return Array(count)
        .fill(null)
        .map(() => generateFieldValue(field.items!));

    default:
      return null;
  }
}

export function generateFromSchema(schema: Schema): Record<string, any> {
  const result: Record<string, any> = {};

  for (const [key, field] of Object.entries(schema)) {
    result[key] = generateFieldValue(field);
  }

  return result;
}

export function validateSchema(schema: Schema): { isValid: boolean; error?: string } {
  try {
    for (const [key, field] of Object.entries(schema)) {
      if (!field.type) {
        return { isValid: false, error: `Field "${key}" missing type` };
      }

      if (field.type === 'enum' && (!field.values || !Array.isArray(field.values))) {
        return { isValid: false, error: `Enum field "${key}" missing values array` };
      }

      if (field.type === 'array' && !field.items) {
        return { isValid: false, error: `Array field "${key}" missing items schema` };
      }
    }

    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid schema format' };
  }
}
