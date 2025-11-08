import React, { useEffect, useState, useRef } from 'react'

export default function Timer({ duration=60, onComplete, disabled }){
  const [seconds, setSeconds] = useState(duration)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(()=>{
    if (!running) return
    intervalRef.current = setInterval(()=>{
      setSeconds(s=>{
        if (s<=1){
          clearInterval(intervalRef.current)
          setRunning(false)
          onComplete && onComplete()
          return 0
        }
        return s-1
      })
    },1000)
    return ()=> clearInterval(intervalRef.current)
  },[running])

  useEffect(()=>{ setSeconds(duration) }, [duration])

  function start(){ if (disabled) return; setRunning(true) }
  function stop(){ setRunning(false) }
  function reset(){ setRunning(false); setSeconds(duration) }

  const progress = ((duration - seconds) / duration) * 100
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="relative p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 shadow-inner">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-200 rounded-t-2xl overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⏱️</span>
          <span className="text-sm font-semibold text-blue-700">Timer Challenge</span>
        </div>
        {running && <span className="text-xs text-blue-600 animate-pulse font-medium">Running...</span>}
      </div>

      {/* Timer display */}
      <div className="text-center my-6">
        <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-lg">
          <div className="text-6xl font-mono font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button 
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            running || disabled 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:scale-105'
          }`}
          onClick={start} 
          disabled={running || disabled}
        >
          ▶ Start
        </button>
        <button 
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            !running 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg hover:scale-105'
          }`}
          onClick={stop} 
          disabled={!running}
        >
          ⏸ Pause
        </button>
        <button 
          className="px-6 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all"
          onClick={reset}
        >
          ↻ Reset
        </button>
      </div>
    </div>
  )
}
