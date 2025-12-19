import React from 'react'
import { Fund } from '../types'

function riskColor(risk: Fund['risk']) {
  switch (risk) {
    case 'Low':
      return 'bg-emerald-100 text-emerald-800'
    case 'Medium':
      return 'bg-amber-100 text-amber-800'
    case 'High':
      return 'bg-rose-100 text-rose-800'
    default:
      return 'bg-slate-100 text-slate-800'
  }
}

export default function FundCard({ fund }: { fund: Fund }) {
  const positive = fund.dailyChangePct >= 0
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white shadow-sm rounded-md">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-slate-50 text-slate-700 font-semibold text-sm">
          {fund.code}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{fund.name}</div>
          <div className="text-xs text-slate-500">{fund.code}</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6 text-right">
        <div className="mr-6">
          <div className="text-xs text-slate-500">Latest NAV</div>
          <div className="text-sm font-medium text-slate-900">${fund.nav.toFixed(2)}</div>
        </div>

        <div className="mr-6">
          <div className="text-xs text-slate-500">Daily Change</div>
          <div className={`text-sm font-medium ${positive ? 'text-emerald-600' : 'text-rose-600'}`}>
            {positive ? '▲' : '▼'} {Math.abs(fund.dailyChangePct).toFixed(2)}%
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full text-xs font-medium ${riskColor(fund.risk)}`}>
          {fund.risk}
        </div>
      </div>
    </div>
  )
}
