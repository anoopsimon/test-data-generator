'use client';

import { generateAirlineData } from '@/lib/generators/airlineData';
import { useState } from 'react';
import ExportPanel from './ExportPanel';

export default function AirlineDataGenerator() {
  const [generatedData, setGeneratedData] = useState<ReturnType<typeof generateAirlineData>[]>([]);

  const handleGenerate = () => {
    const newFlight = generateAirlineData();
    setGeneratedData(prev => [...prev, newFlight]);
  };

  const handleGenerateBulk = () => {
    const newFlights = Array.from({ length: 10 }, () => generateAirlineData());
    setGeneratedData(prev => [...prev, ...newFlights]);
  };

  const handleClear = () => {
    setGeneratedData([]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Generate New Flight
        </button>
        <button
          onClick={handleGenerateBulk}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Generate 10 Flights
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Clear All
        </button>
      </div>
      <ExportPanel data={generatedData} dataType="airline-data" />

      <div className="grid gap-6">
        {generatedData.map((flight, index) => (
          <div key={flight.flightNumber} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Flight {flight.flightNumber}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                flight.status === 'On Time' ? 'bg-green-100 text-green-800' :
                flight.status === 'Delayed' ? 'bg-red-100 text-red-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {flight.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">From</p>
                <p className="font-medium">{flight.departure}</p>
              </div>
              <div>
                <p className="text-gray-600">To</p>
                <p className="font-medium">{flight.destination}</p>
              </div>
              <div>
                <p className="text-gray-600">Departure Time</p>
                <p className="font-medium">{new Date(flight.departureTime).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Arrival Time</p>
                <p className="font-medium">{new Date(flight.arrivalTime).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Aircraft</p>
                <p className="font-medium">{flight.aircraft}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
