'use client';

import { generateBankCustomer } from '@/lib/generators/bankCustomer';
import { useState } from 'react';
import ExportPanel from './ExportPanel';

export default function BankCustomerGeneratorClient() {
  const [generatedData, setGeneratedData] = useState<ReturnType<typeof generateBankCustomer>[]>([]);

  const handleGenerate = () => {
    const newCustomer = generateBankCustomer();
    setGeneratedData(prev => [...prev, newCustomer]);
  };

  const handleGenerateBulk = () => {
    const newCustomers = Array.from({ length: 10 }, () => generateBankCustomer());
    setGeneratedData(prev => [...prev, ...newCustomers]);
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
          Generate New Customer
        </button>
        <button
          onClick={handleGenerateBulk}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Generate 10 Customers
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Clear All
        </button>
      </div>
      <ExportPanel data={generatedData} dataType="bank-customers" />

      <div className="grid gap-6">
        {generatedData.map((customer, index) => (
          <div key={customer.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">{customer.firstName} {customer.lastName}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Account Number</p>
                <p className="font-medium">{customer.accountNumber}</p>
              </div>
              <div>
                <p className="text-gray-600">Account Type</p>
                <p className="font-medium">{customer.accountType}</p>
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">{customer.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Balance</p>
                <p className="font-medium">${customer.balance.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
