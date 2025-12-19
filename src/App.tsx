import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import FundCard from './components/FundCard'
import { funds as initialFunds } from './data/funds'
import { Fund } from './types'

const App: React.FC = () => {
  const [riskFilter, setRiskFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All')
  const [sortBy, setSortBy] = useState<'nav' | 'change'>('nav')

  const filtered = useMemo(() => {
    const list = initialFunds.slice()
    const byRisk = riskFilter === 'All' ? list : list.filter((f) => f.risk === riskFilter)

    if (sortBy === 'nav') byRisk.sort((a, b) => b.nav - a.nav)
    else byRisk.sort((a, b) => b.dailyChange - a.dailyChange)

    return byRisk
  }, [riskFilter, sortBy])

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <Header
          riskFilter={riskFilter}
          onRiskChange={setRiskFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <section className="mt-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <div className="text-2xl">📭 No funds found</div>
              <div className="mt-2">Try changing the risk filter or reset to view all funds.</div>
            </div>
          ) : (
            <div className="grid gap-3">
              {filtered.map((f: Fund) => (
                <FundCard key={f.id} fund={f} />
              ))}
            </div>
          )}
        </section>

        <footer className="mt-8 text-sm text-slate-500">© Fund Dashboard — Demo data only</footer>
      </div>
    </div>
  )
}

export default App
