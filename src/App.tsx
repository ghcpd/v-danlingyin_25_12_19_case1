import { useState, useMemo } from 'react';
import { Fund, RiskLevel } from './types/Fund';
import { FundCard } from './components/FundCard';

// Mock data
const mockFunds: Fund[] = [
  {
    id: '1',
    name: 'Conservative Growth Fund',
    code: 'CGF-001',
    riskLevel: 'Low',
    latestNAV: 125.45,
    dailyChangePercentage: 0.32,
  },
  {
    id: '2',
    name: 'Balanced Opportunity Fund',
    code: 'BOF-002',
    riskLevel: 'Medium',
    latestNAV: 98.67,
    dailyChangePercentage: -0.15,
  },
  {
    id: '3',
    name: 'Tech Innovation Fund',
    code: 'TIF-003',
    riskLevel: 'High',
    latestNAV: 156.89,
    dailyChangePercentage: 2.45,
  },
  {
    id: '4',
    name: 'Global Dividend Fund',
    code: 'GDF-004',
    riskLevel: 'Low',
    latestNAV: 112.34,
    dailyChangePercentage: 0.58,
  },
  {
    id: '5',
    name: 'Emerging Markets Fund',
    code: 'EMF-005',
    riskLevel: 'High',
    latestNAV: 87.23,
    dailyChangePercentage: -1.23,
  },
  {
    id: '6',
    name: 'ESG Leaders Fund',
    code: 'ESG-006',
    riskLevel: 'Medium',
    latestNAV: 145.67,
    dailyChangePercentage: 1.05,
  },
];

type SortBy = 'nav' | 'change' | 'name';
type FilterRisk = 'All' | RiskLevel;

function App() {
  const [selectedRisk, setSelectedRisk] = useState<FilterRisk>('All');
  const [sortBy, setSortBy] = useState<SortBy>('name');

  const filteredAndSortedFunds = useMemo(() => {
    let result = mockFunds;

    // Filter by risk level
    if (selectedRisk !== 'All') {
      result = result.filter((fund) => fund.riskLevel === selectedRisk);
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'nav':
          return b.latestNAV - a.latestNAV;
        case 'change':
          return b.dailyChangePercentage - a.dailyChangePercentage;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [selectedRisk, sortBy]);

  const isEmpty = filteredAndSortedFunds.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Fund Dashboard</h1>
          <p className="text-gray-600 mt-1">Compare and analyze investment funds</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Risk Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Filter by Risk Level
              </label>
              <div className="flex flex-wrap gap-2">
                {(['All', 'Low', 'Medium', 'High'] as const).map((risk) => (
                  <button
                    key={risk}
                    onClick={() => setSelectedRisk(risk)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedRisk === risk
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {risk}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Fund Name</option>
                <option value="nav">Latest NAV (High to Low)</option>
                <option value="change">Daily Change (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {isEmpty && (
          <div className="text-center py-12">
            <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No funds found</h3>
            <p className="text-gray-500">
              Try adjusting your filters to view available funds.
            </p>
          </div>
        )}

        {/* Funds Grid */}
        {!isEmpty && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedFunds.map((fund) => (
              <FundCard key={fund.id} fund={fund} />
            ))}
          </div>
        )}

        {/* Results Count */}
        {!isEmpty && (
          <div className="mt-8 text-center text-sm text-gray-600">
            Showing {filteredAndSortedFunds.length} of {mockFunds.length} funds
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
