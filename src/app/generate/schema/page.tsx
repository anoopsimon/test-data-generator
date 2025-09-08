import SchemaGenerator from '@/components/SchemaGenerator';

export default function SchemaPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Schema-Based Generator</h1>
        <p className="text-xl text-gray-600 mb-8">Generate custom data using your JSON schema</p>
        <SchemaGenerator />
      </div>
    </div>
  );
}
