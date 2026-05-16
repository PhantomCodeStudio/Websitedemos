import { motion } from 'framer-motion'

export default function Character({ name, color, position, status = 'available' }) {
  const statusColors = {
    available: '#10B981',
    busy: '#F59E0B',
    'in-call': '#EF4444',
    away: '#9CA3AF',
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl relative"
        style={{ backgroundColor: color }}
      >
        {name[0]}

        {/* Status ring */}
        <div
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-3 border-white"
          style={{ backgroundColor: statusColors[status] }}
        />
      </div>

      {/* Name */}
      <p className="font-semibold text-charcoal text-center text-sm">{name}</p>
      <p className="text-xs text-charcoal/60 text-center">{position}</p>

      {/* Proximity halo */}
      <motion.div
        className="absolute w-24 h-24 rounded-full border border-dashed"
        style={{ borderColor: color }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}
