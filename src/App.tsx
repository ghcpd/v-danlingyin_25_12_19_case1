import React, { useState, useMemo } from 'react';
import FundCard from './components/FundCard';
import { mockFunds } from './data';

const App: React.FC = () => {
  const [riskFilter, setRiskFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'nav' | 'change'>('name');

  const filteredAndSortedFunds = useMemo(() => {
    let funds = riskFilter === 'All' ? mockFunds : mockFunds.filter(fund => fund.riskLevel === riskFilter);

    funds.sort((a, b) => {
      switch (sortBy) {
        case 'nav':
          return b.latestNAV - a.latestNAV;
        case 'change':
          return b.dailyChangePercentage - a.dailyChangePercentage;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return funds;
  }, [riskFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Fund Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sort */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label htmlFor="risk-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Risk Level
              </label>
              <select
                id="risk-filter"
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value as typeof riskFilter)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
                Sort by
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="name">Name</option>
                <option value="nav">NAV (High to Low)</option>
                <option value="change">Daily Change (High to Low)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Funds Grid */}
        <section>
          {filteredAndSortedFunds.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No funds match the current filters.</p>
              <p className="text-gray-400 mt-2">Try adjusting your filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedFunds.map((fund) => (
                <FundCard key={fund.code} fund={fund} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;