import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-800">Fund Dashboard</h1>
          <p className="text-sm text-slate-500">Overview of funds, risk and performance</p>
        </div>
        <div className="text-sm text-slate-500">Last updated: <span className="font-medium text-slate-700">Today</span></div>
      </div>
    </header>
  )
}
