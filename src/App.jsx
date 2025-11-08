import React, { useEffect, useState } from 'react'
import ChallengeCard from './components/ChallengeCard'

const PREF_KEY = 'bf_prefs'

export default function App() {
  const [prefs, setPrefs] = useState(() => {
    try {
      const raw = localStorage.getItem(PREF_KEY)
      return raw ? JSON.parse(raw) : { categories: ['fitness','creativity','productivity','chaos'], difficulty: 'easy' }
    } catch { return { categories: ['fitness','creativity','productivity','chaos'], difficulty: 'easy' } }
  })

  useEffect(() => {
    localStorage.setItem(PREF_KEY, JSON.stringify(prefs))
  }, [prefs])

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center animate-slide-in">
          <div className="inline-block">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2 animate-float">
              ⚡ BrainFuel
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-4 font-medium">Your daily playful challenge — ignite your potential! 🚀</p>
        </header>

        <main className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <ChallengeCard prefs={prefs} onUpdatePrefs={setPrefs} />
        </main>

        <footer className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white/50 backdrop-blur px-4 py-2 rounded-full">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>Challenges reset every 24 hrs.</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
