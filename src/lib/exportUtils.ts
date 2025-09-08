import yaml from 'js-yaml';

export function convertToJSON(data: any): string {
  return JSON.stringify(data, null, 2);
}

export function convertToXML(data: any): string {
  const rootName = Array.isArray(data) ? 'records' : 'record';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<${rootName}>\n`;
  
  const arrayToProcess = Array.isArray(data) ? data : [data];
  arrayToProcess.forEach((item, index) => {
    xml += '  <item>\n';
    Object.entries(item).forEach(([key, value]) => {
      xml += `    <${key}>${value}</${key}>\n`;
    });
    xml += '  </item>\n';
  });
  
  xml += `</${rootName}>`;
  return xml;
}

export function convertToYAML(data: any): string {
  return yaml.dump(data, { indent: 2 });
}

export function downloadData(data: any, format: 'json' | 'xml' | 'yaml') {
  let content: string;
  let mimeType: string;
  let fileExtension: string;

  switch (format) {
    case 'json':
      content = convertToJSON(data);
      mimeType = 'application/json';
      fileExtension = 'json';
      break;
    case 'xml':
      content = convertToXML(data);
      mimeType = 'application/xml';
      fileExtension = 'xml';
      break;
    case 'yaml':
      content = convertToYAML(data);
      mimeType = 'application/yaml';
      fileExtension = 'yml';
      break;
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  link.href = url;
  link.download = `data-export-${timestamp}.${fileExtension}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
