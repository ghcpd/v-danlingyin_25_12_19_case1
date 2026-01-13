import React, { useMemo, useState } from 'react'
import { MOCK_FUNDS } from '../data/funds'
import FilterBar from '../components/FilterBar'
import FundCard from '../components/FundCard'
import EmptyState from '../components/EmptyState'
import { RiskLevel } from '../types'

export default function Dashboard(){
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'All'>('All')
  const [sortBy, setSortBy] = useState<'nav' | 'change'>('nav')

  const funds = useMemo(()=>{
    let list = [...MOCK_FUNDS]
    if(riskFilter !== 'All') list = list.filter(f => f.risk === riskFilter)

    if(sortBy === 'nav'){
      list.sort((a,b)=> b.nav - a.nav)
    } else if(sortBy === 'change'){
      list.sort((a,b)=> b.dailyChangePct - a.dailyChangePct)
    }
    return list
  }, [riskFilter, sortBy])

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <section className="mb-4">
        <FilterBar riskFilter={riskFilter} onRiskChange={setRiskFilter} sortBy={sortBy} onSortChange={setSortBy} />
      </section>

      <section>
        <div className="mb-3 text-sm text-slate-600">Showing <span className="font-medium text-slate-800">{funds.length}</span> funds</div>

        {funds.length === 0 ? (
          <EmptyState message={riskFilter === 'All' ? 'No funds available.' : `No funds with risk level "${riskFilter}".`} />
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {funds.map(f => (
              <FundCard key={f.id} fund={f} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
