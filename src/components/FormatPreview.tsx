'use client';

import { convertToJSON, convertToXML, convertToYAML } from '@/lib/exportUtils';
import { useState } from 'react';

interface FormatPreviewProps {
  data: any[];
}

export default function FormatPreview({ data }: FormatPreviewProps) {
  const [selectedFormat, setSelectedFormat] = useState<'json' | 'xml' | 'yaml'>('json');

  const getFormattedData = () => {
    switch (selectedFormat) {
      case 'json':
        return convertToJSON(data);
      case 'xml':
        return convertToXML(data);
      case 'yaml':
        return convertToYAML(data);
      default:
        return '';
    }
  };

  return (
    <div className="mt-6 bg-gray-50 rounded-lg p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSelectedFormat('json')}
          className={`px-3 py-1 rounded ${
            selectedFormat === 'json'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          JSON
        </button>
        <button
          onClick={() => setSelectedFormat('xml')}
          className={`px-3 py-1 rounded ${
            selectedFormat === 'xml'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          XML
        </button>
        <button
          onClick={() => setSelectedFormat('yaml')}
          className={`px-3 py-1 rounded ${
            selectedFormat === 'yaml'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          YAML
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-96 overflow-y-auto">
        <code>{getFormattedData()}</code>
      </pre>
    </div>
  );
}
