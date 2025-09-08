const firstNames = ['John', 'Jane', 'Michael', 'Emma', 'William', 'Olivia', 'James', 'Sophia', 'David', 'Isabella'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'example.com', 'company.com'];
const streetTypes = ['St', 'Ave', 'Rd', 'Blvd', 'Ln', 'Dr', 'Way', 'Circle'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];
const states = ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'];
const companies = ['Acme Corp', 'Globex', 'Initech', 'Umbrella Corp', 'Stark Industries', 'Wayne Enterprises'];
const phoneAreaCodes = ['201', '202', '203', '205', '206', '207', '208', '209', '210', '212', '213', '214', '215'];

function generateRandomNum(length: number): string {
  return Array(length).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
}

export function generatePatternBasedString(pattern: string): string {
  switch (pattern.toLowerCase()) {
    case 'email':
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase();
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase();
      const domain = domains[Math.floor(Math.random() * domains.length)];
      const separators = ['', '.', '_'];
      const separator = separators[Math.floor(Math.random() * separators.length)];
      return `${firstName}${separator}${lastName}@${domain}`;

    case 'phone':
      const areaCode = phoneAreaCodes[Math.floor(Math.random() * phoneAreaCodes.length)];
      return `${areaCode}-${generateRandomNum(3)}-${generateRandomNum(4)}`;

    case 'address':
      const streetNum = Math.floor(Math.random() * 9999) + 1;
      const streetName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const streetType = streetTypes[Math.floor(Math.random() * streetTypes.length)];
      return `${streetNum} ${streetName} ${streetType}`;

    case 'zipcode':
      return generateRandomNum(5);

    case 'fulladdress':
      const address = generatePatternBasedString('address');
      const city = cities[Math.floor(Math.random() * cities.length)];
      const state = states[Math.floor(Math.random() * states.length)];
      const zip = generatePatternBasedString('zipcode');
      return `${address}, ${city}, ${state} ${zip}`;

    case 'fullname':
      const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
      return `${fName} ${lName}`;

    case 'company':
      return companies[Math.floor(Math.random() * companies.length)];

    case 'ssn':
      return `${generateRandomNum(3)}-${generateRandomNum(2)}-${generateRandomNum(4)}`;

    case 'creditcard':
      return `${generateRandomNum(4)}-${generateRandomNum(4)}-${generateRandomNum(4)}-${generateRandomNum(4)}`;

    case 'uuid':
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });

    case 'url':
      const protocol = Math.random() > 0.5 ? 'https' : 'http';
      const subdomain = Math.random() > 0.7 ? 'www.' : '';
      const domainName = companies[Math.floor(Math.random() * companies.length)]
        .toLowerCase()
        .replace(/\s+/g, '');
      const tld = ['com', 'org', 'net', 'io'][Math.floor(Math.random() * 4)];
      return `${protocol}://${subdomain}${domainName}.${tld}`;

    default:
      return 'pattern-not-supported';
  }
}
