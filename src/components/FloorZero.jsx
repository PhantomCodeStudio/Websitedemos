import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import IsometricWorkspace from './IsometricWorkspace'
import Character from './Character'
import { Bell, Users, BarChart3, Settings } from 'lucide-react'

export default function FloorZero() {
  const [currentFloor, setCurrentFloor] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [showAIPanel, setShowAIPanel] = useState(false)
  const [knockNotification, setKnockNotification] = useState(null)
  const [hoveredRoom, setHoveredRoom] = useState(null)

  const floors = [
    {
      name: 'The Hub',
      description: 'Main co-working space',
      color: 'from-coral to-peach',
      rooms: [
        { id: 'cowork', name: 'Co-working', people: 5, color: '#FF8B6B' },
        { id: 'boardroom', name: 'Boardroom', people: 3, color: '#F08080' },
        { id: 'game', name: 'Game Lounge', people: 2, color: '#A8E6CF' },
        { id: 'studio', name: 'Content Studio', people: 4, color: '#F7DC6F' },
      ],
    },
    {
      name: 'Creative Space',
      description: 'Design & creative hub',
      color: 'from-lavender to-mint',
      rooms: [
        { id: 'gallery', name: 'Gallery', people: 2, color: '#D4A5D4' },
        { id: 'open-studio', name: 'Open Studio', people: 6, color: '#A8E6CF' },
        { id: 'edit-bays', name: 'Edit Bays', people: 3, color: '#F08080' },
        { id: 'pitch', name: 'Pitch Room', people: 4, color: '#FF8B6B' },
      ],
    },
    {
      name: 'Innovation Lab',
      description: 'Future-focused spaces',
      color: 'from-mint to-gold',
      rooms: [
        { id: 'amphitheatre', name: 'Amphitheatre', people: 8, color: '#A8E6CF' },
        { id: 'prototype', name: 'Prototyping', people: 3, color: '#D4A5D4' },
        { id: 'ai-sandbox', name: 'AI Sandbox', people: 4, color: '#FF8B6B' },
        { id: 'war-room', name: 'War Room', people: 5, color: '#F7DC6F' },
      ],
    },
  ]

  const characters = [
    { id: 1, name: 'Frank', position: 'Founder', floor: 0, room: 'cowork', color: '#FF8B6B' },
    { id: 2, name: 'Sam', position: 'Designer', floor: 0, room: 'boardroom', color: '#A8E6CF' },
    { id: 3, name: 'Kay', position: 'Developer', floor: 1, room: 'open-studio', color: '#D4A5D4' },
    { id: 4, name: 'Bright', position: 'Product', floor: 1, room: 'gallery', color: '#F7DC6F' },
    { id: 5, name: 'Zuri', position: 'Content', floor: 0, room: 'studio', color: '#FF8B6B' },
    { id: 6, name: 'Nkosi', position: 'Operations', floor: 2, room: 'amphitheatre', color: '#A8E6CF' },
    { id: 7, name: 'Temi', position: 'Strategy', floor: 2, room: 'war-room', color: '#D4A5D4' },
  ]

  const handleKnock = (roomId) => {
    setKnockNotification({ room: roomId, timestamp: Date.now() })
    setTimeout(() => setKnockNotification(null), 3000)
  }

  const currentFloorData = floors[currentFloor]

  return (
    <div className="w-full h-full flex bg-cream">
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col">
        {/* Floor Tabs */}
        <div className="bg-white/50 backdrop-blur-sm border-b border-gray-soft px-6 py-4 flex gap-2">
          {floors.map((floor, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentFloor(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                currentFloor === idx
                  ? `bg-gradient-to-r ${floor.color} text-white shadow-lg`
                  : 'bg-gray-soft text-charcoal hover:bg-cream-dark'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Floor {idx} — {floor.name}
            </motion.button>
          ))}
        </div>

        {/* Workspace Canvas */}
        <div className="flex-1 overflow-auto bg-gradient-to-br from-cream via-gray-light to-cream-dark">
          <div className="p-8 flex items-center justify-center min-h-full">
            <IsometricWorkspace
              floor={currentFloor}
              rooms={currentFloorData.rooms}
              selectedRoom={selectedRoom}
              onSelectRoom={setSelectedRoom}
              onHoverRoom={setHoveredRoom}
              hoveredRoom={hoveredRoom}
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white/60 backdrop-blur-md border-l border-gray-soft flex flex-col">
        {/* Characters & Presence */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
              <Users size={20} className="text-coral" />
              People Online
            </h3>
            <div className="space-y-2">
              {characters
                .filter(c => c.floor === currentFloor)
                .map(character => (
                  <motion.div
                    key={character.id}
                    className="p-3 rounded-lg bg-gradient-to-r from-gray-soft to-gray-light hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full shadow-sm animate-pulse"
                        style={{ backgroundColor: character.color }}
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-charcoal text-sm">{character.name}</p>
                        <p className="text-xs text-charcoal/60">{character.position}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Room Details */}
          {selectedRoom && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-gradient-to-br from-coral/10 to-peach/10 border border-coral/20"
            >
              <h4 className="font-bold text-charcoal mb-2">{selectedRoom.name}</h4>
              <p className="text-sm text-charcoal/70 mb-3">
                {selectedRoom.people} people in this room
              </p>
              <button
                onClick={() => handleKnock(selectedRoom.id)}
                className="w-full px-4 py-2 bg-coral text-white rounded-lg font-medium hover:bg-peach transition-all"
              >
                🔔 Knock
              </button>
            </motion.div>
          )}

          {/* Ads Panel */}
          <div className="pt-4 border-t border-gray-soft">
            <h3 className="text-lg font-bold text-charcoal mb-3">Featured Partners</h3>
            <div className="space-y-3">
              {[
                { name: 'Spotify', color: '#1DB954' },
                { name: 'Standard Bank', color: '#0066B3' },
                { name: 'Vodacom', color: '#F39200' },
              ].map(brand => (
                <motion.div
                  key={brand.name}
                  className="h-20 rounded-lg border-2 flex items-center justify-center font-bold text-white cursor-pointer hover:shadow-md transition-all"
                  style={{ borderColor: brand.color, backgroundColor: brand.color + '20' }}
                  whileHover={{ scale: 1.02 }}
                >
                  {brand.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools Toggle */}
        <div className="border-t border-gray-soft p-4">
          <button
            onClick={() => setShowAIPanel(!showAIPanel)}
            className="w-full px-4 py-3 bg-gradient-to-r from-lavender to-mint text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <BarChart3 size={18} />
            {showAIPanel ? 'Hide' : 'Show'} AI Insights
          </button>
        </div>

        {/* AI Panel */}
        {showAIPanel && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            className="border-t border-gray-soft bg-gradient-to-br from-lavender/20 to-mint/20 p-4 max-h-56 overflow-y-auto"
          >
            <h4 className="font-bold text-charcoal mb-2 text-sm">Floor Insights</h4>
            <div className="text-xs text-charcoal/70 space-y-2 font-mono">
              <p>📊 Occupancy: {characters.filter(c => c.floor === currentFloor).length}/7</p>
              <p>🎯 Most Active Room: {currentFloorData.rooms[0].name}</p>
              <p>⏰ Peak Hours: 10 AM - 2 PM</p>
              <p>💬 Avg Interactions: 12/hour</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Knock Notification */}
      {knockNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-28 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl px-6 py-4 border-l-4 border-coral flex items-center gap-3"
        >
          <span className="text-2xl">🔔</span>
          <div>
            <p className="font-bold text-charcoal">Someone knocked!</p>
            <p className="text-sm text-charcoal/60">in {knockNotification.room}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
