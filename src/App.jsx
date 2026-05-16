import { useState } from 'react'
import FloorZero from './components/FloorZero'
import InvestorDeck from './components/InvestorDeck'

export default function App() {
  const [view, setView] = useState('workspace') // 'workspace' or 'deck'

  return (
    <div className="w-full h-screen bg-cream">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-soft shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-peach flex items-center justify-center text-white font-bold text-lg">
              Ⓕ
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-coral to-lavender bg-clip-text text-transparent">
              FloorZero
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setView('workspace')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                view === 'workspace'
                  ? 'bg-coral text-white shadow-lg'
                  : 'bg-gray-soft text-charcoal hover:bg-cream-dark'
              }`}
            >
              Workspace
            </button>
            <button
              onClick={() => setView('deck')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                view === 'deck'
                  ? 'bg-lavender text-white shadow-lg'
                  : 'bg-gray-soft text-charcoal hover:bg-cream-dark'
              }`}
            >
              Investor Deck
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 w-full h-[calc(100vh-80px)] overflow-hidden">
        {view === 'workspace' && <FloorZero />}
        {view === 'deck' && <InvestorDeck />}
      </div>
    </div>
  )
}
