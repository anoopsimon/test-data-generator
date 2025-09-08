# Test Data Generator

A modern web application for generating realistic test data with support for multiple formats and export options.

## Features

- 🎯 Multiple Data Categories:
  - Bank Customer Data (accounts, balances, personal info)
  - Airline Data (flights, schedules, booking info)
  - More categories coming soon!

- 📤 Export Options:
  - JSON (JavaScript Object Notation)
  - XML (eXtensible Markup Language)
  - YAML (YAML Ain't Markup Language)

- 💡 Key Features:
  - Real-time data preview
  - Bulk generation (10 records at once)
  - Format switching before export
  - Clean, modern UI
  - Responsive design

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd test-data-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Select a data category from the homepage
2. Click "Generate New" for single record or "Generate 10" for bulk
3. Preview the data in different formats (JSON, XML, YAML)
4. Click the export button for your preferred format
5. Files will download automatically with timestamped names

## Tech Stack

- Next.js 13+ (React Framework)
- TypeScript (Type Safety)
- Tailwind CSS (Styling)
- js-yaml (YAML Processing)

## Project Structure

```
src/
├── app/                   # Next.js app router pages
├── components/           # React components
├── lib/
│   ├── generators/      # Data generation logic
│   ├── categories.ts    # Data category definitions
│   └── exportUtils.ts   # Export utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Roadmap

- [ ] Add more data categories (e.g., retail, healthcare)
- [ ] Add data validation rules
- [ ] Support for custom templates
- [ ] API endpoint for programmatic access
- [ ] Import functionality for existing data
