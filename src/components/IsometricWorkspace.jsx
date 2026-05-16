import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function IsometricWorkspace({
  floor,
  rooms,
  selectedRoom,
  onSelectRoom,
  onHoverRoom,
  hoveredRoom,
}) {
  const containerRef = useRef(null)

  // Isometric projection helper
  const toIsometric = (x, y, z = 0) => {
    const isoX = (x - y) * 0.866
    const isoY = (x + y) * 0.5 - z
    return { x: isoX, y: isoY }
  }

  // Room positions for each floor (in isometric space)
  const roomConfigs = {
    0: [ // Floor 0 - The Hub
      { id: 'cowork', name: 'Co-working', pos: { x: 0, y: -30 }, width: 100, height: 60, color: '#FF8B6B' },
      { id: 'boardroom', name: 'Boardroom', pos: { x: -100, y: 20 }, width: 60, height: 60, color: '#F08080' },
      { id: 'game', name: 'Game Lounge', pos: { x: 100, y: 20 }, width: 60, height: 60, color: '#A8E6CF' },
      { id: 'studio', name: 'Content Studio', pos: { x: 0, y: 80 }, width: 80, height: 60, color: '#F7DC6F' },
    ],
    1: [ // Floor 1 - Creative Space
      { id: 'gallery', name: 'Gallery', pos: { x: -80, y: -40 }, width: 80, height: 70, color: '#D4A5D4' },
      { id: 'open-studio', name: 'Open Studio', pos: { x: 80, y: -40 }, width: 100, height: 80, color: '#A8E6CF' },
      { id: 'edit-bays', name: 'Edit Bays', pos: { x: -80, y: 60 }, width: 70, height: 50, color: '#F08080' },
      { id: 'pitch', name: 'Pitch Room', pos: { x: 80, y: 70 }, width: 70, height: 60, color: '#FF8B6B' },
    ],
    2: [ // Floor 2 - Innovation Lab
      { id: 'amphitheatre', name: 'Amphitheatre', pos: { x: 0, y: -30 }, width: 120, height: 100, color: '#A8E6CF' },
      { id: 'prototype', name: 'Prototyping', pos: { x: -90, y: 50 }, width: 70, height: 60, color: '#D4A5D4' },
      { id: 'ai-sandbox', name: 'AI Sandbox', pos: { x: 0, y: 70 }, width: 80, height: 60, color: '#FF8B6B' },
      { id: 'war-room', name: 'War Room', pos: { x: 90, y: 50 }, width: 70, height: 60, color: '#F7DC6F' },
    ],
  }

  const renderRoom = (room, index) => {
    const iso = toIsometric(room.pos.x, room.pos.y)
    const isSelected = selectedRoom?.id === room.id
    const isHovered = hoveredRoom?.id === room.id

    return (
      <motion.div
        key={room.id}
        className="absolute cursor-pointer group"
        style={{
          left: `${iso.x + 400}px`,
          top: `${iso.y + 300}px`,
          width: `${room.width}px`,
          height: `${room.height}px`,
        }}
        onMouseEnter={() => onHoverRoom(room)}
        onMouseLeave={() => onHoverRoom(null)}
        onClick={() => onSelectRoom(room)}
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        {/* Room shape - isometric parallelogram */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
          {/* Main room floor */}
          <defs>
            <linearGradient id={`grad-${room.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={room.color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={room.color} stopOpacity="0.6" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Isometric shape */}
          <polygon
            points="50,30 150,30 180,80 80,80"
            fill={`url(#grad-${room.id})`}
            stroke={isSelected ? '#2C3E50' : isHovered ? room.color : 'rgba(44,62,80,0.1)'}
            strokeWidth={isSelected ? 3 : isHovered ? 2 : 1}
            filter="url(#shadow)"
            className="transition-all"
          />

          {/* Top face */}
          <polygon
            points="50,30 80,10 180,10 150,30"
            fill={room.color}
            opacity="0.4"
          />

          {/* Side face */}
          <polygon
            points="150,30 180,10 180,80 150,100"
            fill={room.color}
            opacity="0.2"
          />

          {/* Text */}
          <text
            x="115"
            y="60"
            textAnchor="middle"
            fill="#2C3E50"
            fontSize="12"
            fontWeight="600"
            className="pointer-events-none"
          >
            {room.name}
          </text>
        </svg>

        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-white/10 rounded-lg border-2 border-white/30 pointer-events-none" />
        )}

        {/* Info tooltip */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -20 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-3 py-2 rounded-lg shadow-lg pointer-events-none z-50"
          >
            <p className="text-xs font-semibold text-charcoal">{room.name}</p>
            <p className="text-xs text-charcoal/60">👥 {room.people} people</p>
          </motion.div>
        )}
      </motion.div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full max-w-6xl"
      style={{ perspective: '1000px' }}
    >
      {/* Background floor */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <pattern id="floor-pattern" x="40" y="30" width="40" height="30" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="15" r="2" fill="rgba(255,139,107,0.05)" />
          </pattern>
        </defs>

        {/* Isometric floor grid background */}
        <polygon
          points="400,50 800,250 400,450 0,250"
          fill="url(#floor-pattern)"
          stroke="rgba(212,165,212,0.2)"
          strokeWidth="1"
        />

        {/* Decorative floor lines */}
        <line x1="200" y1="150" x2="600" y2="350" stroke="rgba(168,230,207,0.1)" strokeWidth="1" />
        <line x1="300" y1="100" x2="500" y2="400" stroke="rgba(212,165,212,0.1)" strokeWidth="1" />
      </svg>

      {/* Rooms */}
      <div className="absolute inset-0">
        {roomConfigs[floor].map((room, idx) => renderRoom(room, idx))}
      </div>

      {/* Floor label */}
      <motion.div
        className="absolute bottom-8 right-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-sm font-semibold text-charcoal/50">Click rooms to interact</p>
      </motion.div>

      {/* Ambient glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(244,63,94,0.05) 100%)',
        }}
      />
    </div>
  )
}
