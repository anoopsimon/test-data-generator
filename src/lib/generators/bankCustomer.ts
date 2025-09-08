interface BankCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  accountType: string;
  balance: number;
}

const accountTypes = ['Savings', 'Checking', 'Investment', 'Credit'];

export function generateBankCustomer(): BankCustomer {
  const firstName = ['John', 'Jane', 'Michael', 'Emma', 'William'][Math.floor(Math.random() * 5)];
  const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][Math.floor(Math.random() * 5)];
  
  return {
    id: Math.random().toString(36).substring(2, 11),
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    accountNumber: Math.floor(Math.random() * 1000000000).toString().padStart(9, '0'),
    accountType: accountTypes[Math.floor(Math.random() * accountTypes.length)],
    balance: Math.floor(Math.random() * 100000),
  };
}
