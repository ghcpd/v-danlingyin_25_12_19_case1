import React from 'react'

type Props = {
  riskFilter: 'All' | 'Low' | 'Medium' | 'High'
  onRiskChange: (v: 'All' | 'Low' | 'Medium' | 'High') => void
  sortBy: 'nav' | 'change'
  onSortChange: (v: 'nav' | 'change') => void
}

const Header: React.FC<Props> = ({ riskFilter, onRiskChange, sortBy, onSortChange }) => {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <h1 className="text-2xl font-semibold">Fund Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Overview of fund performance and risk</p>
      </div>

      <div className="flex gap-3 items-center">
        <label className="text-sm text-slate-600">Risk</label>
        <select
          className="border rounded px-3 py-1 text-sm"
          value={riskFilter}
          onChange={(e) => onRiskChange(e.target.value as any)}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label className="text-sm text-slate-600">Sort</label>
        <select
          className="border rounded px-3 py-1 text-sm"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as any)}
        >
          <option value="nav">NAV (desc)</option>
          <option value="change">Daily Change (desc)</option>
        </select>
      </div>
    </header>
  )
}

export default Header
