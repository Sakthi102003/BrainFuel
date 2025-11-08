import React, { useState } from 'react'

export default function Checklist({ items = ['Do it'], onComplete, disabled }){
  const [checked, setChecked] = useState(() => items.map(()=>false))

  function toggle(i){
    if (disabled) return
    const copy = [...checked]
    copy[i] = !copy[i]
    setChecked(copy)
    if (copy.every(Boolean)) onComplete && onComplete()
  }

  const completedCount = checked.filter(Boolean).length
  const progress = (completedCount / items.length) * 100

  return (
    <div className="relative p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-200 shadow-inner">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-200 rounded-t-2xl overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span className="text-sm font-semibold text-amber-700">Checklist Challenge</span>
        </div>
        <span className="text-xs text-amber-600 font-medium bg-white px-3 py-1 rounded-full">
          {completedCount}/{items.length} done
        </span>
      </div>

      <ul className="space-y-3">
        {items.map((it, i) => (
          <li 
            key={i} 
            className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
              checked[i] 
                ? 'bg-white shadow-md scale-[0.98]' 
                : 'bg-amber-100/50 hover:bg-white hover:shadow-md'
            }`}
            onClick={() => toggle(i)}
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
              checked[i]
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 scale-110'
                : 'border-amber-400 bg-white'
            }`}>
              {checked[i] && <span className="text-white text-sm font-bold">✓</span>}
            </div>
            <span className={`flex-1 font-medium transition-all ${
              checked[i] 
                ? 'line-through text-gray-400' 
                : 'text-gray-800'
            }`}>
              {it}
            </span>
          </li>
        ))}
      </ul>

      {completedCount === items.length && (
        <div className="mt-4 text-center text-sm font-semibold text-green-600 animate-pulse">
          🎉 All tasks completed! Don't forget to mark the challenge as done.
        </div>
      )}
    </div>
  )
}
