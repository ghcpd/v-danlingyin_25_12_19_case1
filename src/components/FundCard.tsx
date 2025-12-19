import React from 'react'
import { Fund } from '../types'

function formatPct(v: number){
  return `${v > 0 ? '+' : ''}${v.toFixed(2)}%`
}

export default function FundCard({ fund }: { fund: Fund }){
  const changePositive = fund.dailyChangePct > 0
  const changeZero = fund.dailyChangePct === 0

  const riskClass = {
    Low: 'badge-low',
    Medium: 'badge-medium',
    High: 'badge-high'
  }[fund.risk]

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-800">{fund.name}</span>
            <span className="text-xs text-slate-500">{fund.code}</span>
          </div>
          <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${riskClass}`}>{fund.risk}</span>
        </div>
        <div className="mt-3 flex items-baseline gap-4">
          <div>
            <div className="text-xs text-slate-500">Latest NAV</div>
            <div className="text-lg font-semibold text-slate-900">{fund.nav.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Daily Change</div>
            <div className={`text-lg font-semibold ${changeZero ? 'text-slate-700' : changePositive ? 'text-emerald-600' : 'text-rose-600'}`}>
              {formatPct(fund.dailyChangePct)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
