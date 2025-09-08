import BankCustomerGenerator from '@/components/BankCustomerGenerator';

export default function BankCustomerPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Bank Customer Data Generator</h1>
        <p className="text-xl text-gray-600 mb-8">Generate realistic bank customer profiles</p>
        <BankCustomerGenerator />
      </div>
    </div>
  );
}
