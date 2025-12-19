import React from 'react'
import { Fund } from '../types'

const riskColors: Record<string, string> = {
  Low: 'bg-emerald-100 text-emerald-800',
  Medium: 'bg-amber-100 text-amber-800',
  High: 'bg-rose-100 text-rose-800'
}

const FundCard: React.FC<{ fund: Fund }> = ({ fund }) => {
  const changePositive = fund.dailyChange >= 0
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
      <div className="flex items-center gap-4">
        <div>
          <div className="text-sm text-slate-500">{fund.code}</div>
          <div className="font-medium">{fund.name}</div>
        </div>
        <div>
          <span className={`px-2 py-0.5 text-xs rounded ${riskColors[fund.risk]}`}>{fund.risk}</span>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm text-slate-500">NAV</div>
        <div className="font-mono font-semibold">{fund.nav.toFixed(2)}</div>
        <div className={`text-sm ${changePositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {changePositive ? '+' : ''}{fund.dailyChange.toFixed(2)}%
        </div>
      </div>
    </div>
  )
}

export default FundCard
