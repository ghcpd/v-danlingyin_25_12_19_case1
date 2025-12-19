import React from 'react'
import { RiskLevel } from '../types'

type Props = {
  riskFilter: RiskLevel | 'All'
  onRiskChange: (r: RiskLevel | 'All') => void
  sortBy: 'nav' | 'change'
  onSortChange: (s: 'nav' | 'change') => void
}

export default function FilterBar({ riskFilter, onRiskChange, sortBy, onSortChange }: Props){
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="flex items-center gap-3">
        <label className="text-sm text-slate-600">Risk</label>
        <select aria-label="Filter by risk" className="border rounded px-2 py-1 text-sm" value={riskFilter} onChange={(e)=> onRiskChange(e.target.value as RiskLevel | 'All')}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="flex items-center gap-3">
        <label className="text-sm text-slate-600">Sort by</label>
        <select aria-label="Sort funds" className="border rounded px-2 py-1 text-sm" value={sortBy} onChange={(e)=> onSortChange(e.target.value as 'nav' | 'change')}>
          <option value="nav">NAV (desc)</option>
          <option value="change">Daily Change (desc)</option>
        </select>
      </div>
    </div>
  )
}
