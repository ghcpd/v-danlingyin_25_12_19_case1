# Fund Finance Dashboard

A professional React + TypeScript fund investment dashboard with filtering and sorting capabilities.

## Project Structure

```
├── src/
│   ├── components/
│   │   └── FundCard.tsx          # Individual fund display component
│   ├── types/
│   │   └── Fund.ts               # TypeScript interfaces
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── postcss.config.js             # PostCSS configuration
```

## Features

- **Fund Dashboard**: Display fund information in a professional grid layout
- **Filter by Risk Level**: Filter funds by Low, Medium, or High risk
- **Sort Options**: Sort by fund name, NAV value, or daily change percentage
- **Visual Indicators**: 
  - Green for positive performance
  - Red for negative performance
  - Color-coded risk level badges
- **Empty State**: User-friendly message when no data matches filters
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## Getting Started

### Prerequisites
- Node.js 16.0.0 or higher
- pnpm 8.0.0 or higher

### Installation

1. Install dependencies:
```bash
pnpm install
```

### Development

Run the development server:
```bash
pnpm dev
```

The application will automatically open in your default browser at `http://localhost:3000`.

### Build

Build for production:
```bash
pnpm build
```

The compiled files will be in the `dist/` directory.

### Type Checking

Check TypeScript errors without emitting:
```bash
pnpm type-check
```

## Technology Stack

- **React 18**: UI framework
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS 3**: Utility-first CSS framework
- **Vite 5**: Fast build tool
- **pnpm**: Efficient package manager

## Application Features

### Fund Data Display
Each fund card displays:
- Fund name and code
- Risk level (Low/Medium/High) with visual indicator
- Latest NAV (Net Asset Value)
- Daily change percentage with color coding

### Interactions
- **Filter by Risk Level**: Click filter buttons to view funds by risk profile
- **Sort Options**: Use dropdown to sort by name, NAV, or performance
- **Real-time Updates**: Results update instantly as filters/sorts change

### Data Model
All data is typed using TypeScript interfaces:
```typescript
interface Fund {
  id: string;
  name: string;
  code: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  latestNAV: number;
  dailyChangePercentage: number;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Mock data is embedded in the App component for demonstration
- No backend required for local development
- All styling uses Tailwind CSS utility classes
