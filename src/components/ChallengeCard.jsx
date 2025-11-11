import React, { useEffect, useMemo, useState } from 'react'
import Timer from './Timer'
import Checklist from './Checklist'
import { CHALLENGES } from '../data/challenges'

const STORAGE_KEY = 'bf_today_challenge'
const STREAK_KEY = 'bf_streak'

function todayKey() {
  const d = new Date()
  return d.toISOString().slice(0,10)
}

function pickRandom(prefs) {
  const pool = CHALLENGES.filter(c => 
    prefs.categories.includes(c.cat) && c.diff === prefs.difficulty
  )
  if (pool.length === 0) return CHALLENGES[Math.floor(Math.random()*CHALLENGES.length)]
  return pool[Math.floor(Math.random()*pool.length)]
}

function playConfetti() {
  // Enhanced confetti: create colorful circles that fly up and fade
  const root = document.createElement('div')
  root.style.position = 'fixed'
  root.style.left = '0'
  root.style.top = '0'
  root.style.width = '100%'
  root.style.height = '100%'
  root.style.pointerEvents = 'none'
  root.style.zIndex = '60'
  document.body.appendChild(root)

  const colors = ['#EF4444','#F59E0B','#10B981','#3B82F6','#8B5CF6','#EC4899','#14B8A6']
  const shapes = ['circle', 'square']
  
  for (let i=0;i<40;i++){
    const el = document.createElement('div')
    const isCircle = shapes[Math.floor(Math.random()*shapes.length)] === 'circle'
    el.style.position = 'absolute'
    el.style.left = Math.random()*100 + '%'
    el.style.top = Math.random()*60 + '%'
    el.style.width = (8 + Math.random()*8) + 'px'
    el.style.height = el.style.width
    el.style.borderRadius = isCircle ? '50%' : '2px'
    el.style.background = colors[Math.floor(Math.random()*colors.length)]
    el.style.transform = `translateY(0) scale(${0.8+Math.random()*1.2}) rotate(0deg)`
    el.style.opacity = '1'
    el.style.transition = 'transform 1200ms cubic-bezier(.2,.9,.2,1), opacity 1200ms'
    root.appendChild(el)
    requestAnimationFrame(()=>{
      el.style.transform = `translateY(-${200+Math.random()*400}px) rotate(${Math.random()*1080-540}deg) scale(0.2)`
      el.style.opacity = '0'
    })
  }
  
  // Play success sound (simple beep using Web Audio API)
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
  } catch(e) { /* ignore audio errors */ }
  
  setTimeout(()=>root.remove(),1400)
}

export default function ChallengeCard({ prefs, onUpdatePrefs }){
  const [today, setToday] = useState(()=>{
    try{
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : null
    }catch{ return null }
  })

  const [streak, setStreak] = useState(()=>{
    try{ const r = localStorage.getItem(STREAK_KEY); return r?JSON.parse(r):{count:0,last:null} }catch{return {count:0,last:null}} }
  )

  const [isFlipped, setIsFlipped] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  useEffect(()=>{
    // ensure a challenge exists for today
    const key = todayKey()
    if (!today || today.date !== key){
      const gen = pickRandom(prefs)
      const obj = { date: key, challenge: gen, completed: false }
      setToday(obj)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
    }
  }, [])

  useEffect(()=>{
    if (today) localStorage.setItem(STORAGE_KEY, JSON.stringify(today))
  }, [today])

  function generateNow(){
    // Shuffle animation
    setIsShuffling(true)
    setIsFlipped(false)
    
    setTimeout(() => {
      const gen = pickRandom(prefs)
      const obj = { date: todayKey(), challenge: gen, completed: false }
      setToday(obj)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
      setIsShuffling(false)
    }, 600)
  }

  function flipCard(){
    setIsFlipped(!isFlipped)
  }

  function markComplete(){
    if (!today) return
    if (today.completed) return
    const updated = { ...today, completed: true }
    setToday(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

    // streak logic
    const todayDate = todayKey()
    const last = streak.last
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate()-1)
    const ykey = yesterday.toISOString().slice(0,10)

    let nextCount = 1
    if (last === ykey) nextCount = streak.count + 1
    else if (last === todayDate) nextCount = streak.count
    else nextCount = 1

    const ns = { count: nextCount, last: todayDate }
    setStreak(ns)
    localStorage.setItem(STREAK_KEY, JSON.stringify(ns))

    playConfetti()
  }

  function resetStreak(){
    const ns = { count: 0, last: null }
    setStreak(ns)
    localStorage.setItem(STREAK_KEY, JSON.stringify(ns))
  }

  const ch = today?.challenge
  const catColors = {
    fitness: 'badge-fitness',
    creativity: 'badge-creativity',
    productivity: 'badge-productivity',
    chaos: 'badge-chaos'
  }
  const diffColors = {
    easy: 'diff-easy',
    medium: 'diff-medium',
    hard: 'diff-hard'
  }

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''} ${isShuffling ? 'animate-shuffle' : ''}`}>
      <div className="flip-card-inner">
        {/* FRONT - Hidden Challenge */}
        <section className="flip-card-front glass rounded-3xl p-8 shadow-2xl">
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="text-8xl mb-4 animate-float">🎴</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Daily Challenge Awaits!</h2>
              <p className="text-gray-600">Click the button below to reveal today's mission</p>
            </div>

            <button 
              onClick={flipCard}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-bold text-lg"
            >
              🎯 Reveal Challenge
            </button>

            <div className="mt-8 pt-6 border-t border-violet-200 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Streak:</span> {streak.count} 🔥
              </div>
              <button className="text-sm text-violet-600 hover:text-violet-800 font-medium" onClick={generateNow}>
                🎲 Shuffle New Challenge
              </button>
            </div>

            {/* Preferences section */}
            <div className="mt-8 pt-6 border-t border-violet-200">
              <details className="group">
                <summary className="cursor-pointer text-sm font-semibold text-violet-700 hover:text-violet-900 flex items-center justify-center gap-2">
                  <span>⚙️ Preferences</span>
                  <span className="text-xs text-gray-500 group-open:hidden">(click to expand)</span>
                </summary>
                
                <div className="mt-4 space-y-4 bg-violet-50/50 rounded-xl p-4">
                  {/* Difficulty selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                    <div className="flex gap-2 justify-center">
                      {['easy', 'medium', 'hard'].map(d => (
                        <button
                          key={d}
                          onClick={() => onUpdatePrefs({...prefs, difficulty: d})}
                          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                            prefs.difficulty === d
                              ? 'bg-violet-600 text-white shadow-lg scale-105'
                              : 'bg-white text-gray-700 hover:bg-violet-100'
                          }`}
                        >
                          {d.charAt(0).toUpperCase() + d.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['fitness', 'creativity', 'productivity', 'chaos'].map(c => (
                        <label key={c} className={`flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                          prefs.categories.includes(c)
                            ? 'bg-violet-600 text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-violet-100'
                        }`}>
                          <input
                            type="checkbox"
                            checked={prefs.categories.includes(c)}
                            onChange={e => {
                              const next = e.target.checked ? [...prefs.categories, c] : prefs.categories.filter(x=>x!==c)
                              onUpdatePrefs({...prefs, categories: next})
                            }}
                            className="w-4 h-4 rounded accent-violet-600"
                          />
                          <span className="font-medium capitalize text-sm">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* BACK - Revealed Challenge */}
        <section className="flip-card-back glass rounded-3xl p-8 shadow-2xl animate-pulse-glow">
          {/* Header with badges */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <button 
                  onClick={flipCard}
                  className="text-violet-600 hover:text-violet-800 text-sm font-semibold flex items-center gap-1"
                >
                  ← Back to cover
                </button>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-violet-600">Today's Challenge</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${catColors[ch?.cat] || 'bg-gray-200'}`}>
                  {ch?.cat}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${diffColors[ch?.diff] || 'bg-gray-200'}`}>
                  {ch?.diff}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 leading-tight">{ch?.text ?? 'Loading...'}</h2>
            </div>

            <div className="ml-6 text-center bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-4 shadow-lg min-w-[100px]">
              <div className="text-xs uppercase tracking-wider font-semibold opacity-90">Streak</div>
              <div className="text-4xl font-extrabold my-1">{streak.count}</div>
              <div className="text-xs">🔥</div>
              <button className="mt-2 text-xs text-white/80 hover:text-white underline" onClick={resetStreak}>Reset</button>
            </div>
          </div>

          {/* Challenge content */}
          <div className="mt-6">
            {!ch ? (
              <div className="text-center py-8 text-gray-400">Loading challenge...</div>
            ) : (
              ch.kind === 'timer' ? (
                <Timer duration={ch.duration} onComplete={markComplete} disabled={today?.completed} />
              ) : (
                <Checklist items={ch.items} onComplete={markComplete} disabled={today?.completed} />
              )
            )}
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-primary" onClick={generateNow}>
              🎲 Generate New
            </button>
            <button className="btn-secondary" onClick={()=>{ localStorage.removeItem(STORAGE_KEY); generateNow(); }}>
              🔄 Force Refresh
            </button>
            <button className="btn-success ml-auto" onClick={markComplete} disabled={today?.completed}>
              {today?.completed ? '✅ Completed!' : '✓ Mark Complete'}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
