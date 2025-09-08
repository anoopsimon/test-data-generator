'use client';

import { useState } from 'react';
import { Schema, generateFromSchema, validateSchema } from '@/lib/generators/schemaGenerator';
import ExportPanel from './ExportPanel';

export default function SchemaGenerator() {
  const [schema, setSchema] = useState<string>('');
  const [generatedData, setGeneratedData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const sampleSchema = {
    fullName: { type: 'string', pattern: 'fullname' },
    age: { type: 'number', min: 18, max: 100 },
    email: { type: 'string', pattern: 'email' },
    phone: { type: 'string', pattern: 'phone' },
    address: { type: 'string', pattern: 'fulladdress' },
    company: { type: 'string', pattern: 'company' },
    ssn: { type: 'string', pattern: 'ssn' },
    creditCard: { type: 'string', pattern: 'creditcard' },
    website: { type: 'string', pattern: 'url' },
    isActive: { type: 'boolean' },
    tags: { 
      type: 'array',
      items: { type: 'string', length: 5 },
      length: 3
    },
    role: { 
      type: 'enum',
      values: ['admin', 'user', 'guest']
    },
    createdAt: { type: 'date', format: 'iso' },
    id: { type: 'string', pattern: 'uuid' }
  };

  const handleSchemaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSchema(e.target.value);
    setError(null);
  };

  const handleGenerate = () => {
    try {
      const parsedSchema: Schema = JSON.parse(schema);
      const validation = validateSchema(parsedSchema);
      
      if (!validation.isValid) {
        setError(validation.error || 'Invalid schema');
        return;
      }

      const newData = generateFromSchema(parsedSchema);
      setGeneratedData(prev => [...prev, newData]);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  const handleGenerateBulk = () => {
    try {
      const parsedSchema: Schema = JSON.parse(schema);
      const validation = validateSchema(parsedSchema);
      
      if (!validation.isValid) {
        setError(validation.error || 'Invalid schema');
        return;
      }

      const newData = Array.from({ length: 10 }, () => generateFromSchema(parsedSchema));
      setGeneratedData(prev => [...prev, ...newData]);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  const handleClear = () => {
    setGeneratedData([]);
    setError(null);
  };

  const loadSampleSchema = () => {
    setSchema(JSON.stringify(sampleSchema, null, 2));
    setError(null);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">JSON Schema</h3>
          <button
            onClick={loadSampleSchema}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Load Sample Schema
          </button>
        </div>
        <textarea
          value={schema}
          onChange={handleSchemaChange}
          className="w-full h-64 font-mono text-sm p-4 border rounded-lg"
          placeholder="Paste your JSON schema here..."
        />
        {error && (
          <div className="mt-2 text-red-600 text-sm">{error}</div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          disabled={!schema}
        >
          Generate Single Record
        </button>
        <button
          onClick={handleGenerateBulk}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          disabled={!schema}
        >
          Generate 10 Records
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          disabled={generatedData.length === 0}
        >
          Clear All
        </button>
      </div>

      <ExportPanel data={generatedData} dataType="schema-based" />

      {generatedData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Generated Records</h3>
          <div className="grid gap-6">
            {generatedData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <pre className="text-sm">
                  <code>{JSON.stringify(item, null, 2)}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
