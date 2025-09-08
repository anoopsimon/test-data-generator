import AirlineDataGenerator from '@/components/AirlineDataGenerator';

export default function AirlinePage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Airline Data Generator</h1>
        <p className="text-xl text-gray-600 mb-8">Generate realistic flight and booking information</p>
        <AirlineDataGenerator />
      </div>
    </div>
  );
}
