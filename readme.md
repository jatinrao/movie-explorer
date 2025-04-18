# Movie Explorer

> A React-based movie exploration application built with TypeScript and Webpack.

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

Clone repository:

```bash
cd movie-explorer

npm install     # Install dependencies

npm run dev     # Start the development server

npm run build   # Generate production build

npm run start   # Serve production build

npm run test    # Run test suites

npm run analyze # Analyze bundle

```

Features:

Atomic Design
Hot reloading
Unit and Integration testing
Development tools like eslint ,prettier
Real-time error feedback
Tailwind
High performance (refering to lighthouse audit report)
Atomic Design directory structure could be better but might be overkill for current number of components

Descison Taken:
Proxy Api could be used here to manage secrets but it make more sense to use deployment service secret manager like AWS secret manager or using Vercel rather than adding a dependencies like express or vercel-cli

Apart from avoid heavy library i.e using tailwind and atomic design,Rest of tools and requirement , didnt use any other tools

Trade offs
Using tailwind vis PlayCDN , using cli or postcss can enhance performance
Added lazy loading for code-splitting , turned off (commented out) due to Unit test
Config files (webpack ,eslint,etc) should be in Typescript
