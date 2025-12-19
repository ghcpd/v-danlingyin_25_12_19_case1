import React from 'react'

export default function EmptyState({ message = 'No funds available.' }: { message?: string }){
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center text-slate-700">
      <div className="text-xl font-semibold mb-2">{message}</div>
      <div className="text-sm">Try changing filters or check back later.</div>
    </div>
  )
}
