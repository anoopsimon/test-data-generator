'use client';

import { downloadData } from '@/lib/exportUtils';
import FormatPreview from './FormatPreview';

interface ExportPanelProps {
  data: any[];
  dataType: string;
}

export default function ExportPanel({ data, dataType }: ExportPanelProps) {
  if (data.length === 0) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={() => downloadData(data, 'json')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          Export as JSON
        </button>
        <button
          onClick={() => downloadData(data, 'xml')}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          Export as XML
        </button>
        <button
          onClick={() => downloadData(data, 'yaml')}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
        >
          Export as YAML
        </button>
      </div>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Preview</h3>
      <FormatPreview data={data} />
    </div>
  );
}
