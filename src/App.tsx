import React from 'react'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-6">
        <Dashboard />
      </div>
    </div>
  )
}
