import React, { useMemo, useState } from 'react'
import { MOCK_FUNDS } from './data/funds'
import FundCard from './components/FundCard'
import { Fund, RiskLevel } from './types'

const RISK_OPTIONS: (RiskLevel | 'All')[] = ['All', 'Low', 'Medium', 'High']

export default function App() {
  const [funds] = useState<Fund[]>(MOCK_FUNDS)
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'All'>('All')
  const [sortBy, setSortBy] = useState<'nav' | 'daily' | 'name'>('nav')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  const visible = useMemo(() => {
    let list = funds.slice()
    if (riskFilter !== 'All') list = list.filter((f) => f.risk === riskFilter)

    list.sort((a, b) => {
      let v = 0
      if (sortBy === 'nav') v = a.nav - b.nav
      if (sortBy === 'daily') v = a.dailyChangePct - b.dailyChangePct
      if (sortBy === 'name') v = a.name.localeCompare(b.name)
      return sortDir === 'asc' ? v : -v
    })

    return list
  }, [funds, riskFilter, sortBy, sortDir])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16">
      <header className="container mb-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Fund Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Quickly compare funds, risk and returns.</p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-sm text-slate-600">
            <div className="text-xs text-slate-400">Positive</div>
            <div className="w-8 h-8 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-medium">▲</div>
            <div className="ml-4 text-xs text-slate-400">Negative</div>
            <div className="w-8 h-8 rounded-md bg-rose-100 flex items-center justify-center text-rose-700 text-xs font-medium">▼</div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="mb-6 grid gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {RISK_OPTIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRiskFilter(r)}
                className={`text-sm px-3 py-1 rounded-md border ${r === riskFilter ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}`}>
                {r}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs text-slate-500">Sort</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-sm rounded-md border bg-white px-3 py-1 border-slate-200">
              <option value="nav">Latest NAV</option>
              <option value="daily">Daily Change %</option>
              <option value="name">Name</option>
            </select>

            <button
              onClick={() => setSortDir((s) => (s === 'asc' ? 'desc' : 'asc'))}
              className="text-sm px-3 py-1 rounded-md border bg-white border-slate-200">
              {sortDir === 'asc' ? 'Asc' : 'Desc'}
            </button>
          </div>
        </section>

        <section>
          <div className="space-y-3">
            {visible.length === 0 ? (
              <div className="rounded-md border border-dashed border-slate-200 bg-white p-10 text-center">
                <div className="text-lg font-medium text-slate-900">No funds found</div>
                <div className="mt-2 text-sm text-slate-500">Try changing filters or check back later.</div>
              </div>
            ) : (
              visible.map((f) => <FundCard key={f.id} fund={f} />)
            )}
          </div>

          <div className="mt-8 text-sm text-slate-500">Showing <span className="font-medium text-slate-700">{visible.length}</span> funds</div>
        </section>

        <footer className="mt-12 text-center text-xs text-slate-400">
          <div>Design: professional · Colors: green = positive, red = negative</div>
          <div className="mt-2">This is a mock demo — no real money or backend.</div>
        </footer>
      </main>
    </div>
  )
}
