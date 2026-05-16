import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap, Globe } from 'lucide-react'

export default function InvestorDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Cover
    {
      title: 'FloorZero',
      subtitle: 'The Future of Virtual Workspaces',
      content: 'Warm • Inviting • Productive',
      visual: 'cover',
      stats: ['$50M TAM', '2025 Launch', 'Series A Ready'],
    },
    // Slide 2: Problem
    {
      title: 'The Problem',
      subtitle: 'Remote work feels cold and disconnected',
      bullets: [
        '❌ Existing platforms lack personality',
        '❌ Users feel isolated in virtual spaces',
        '❌ No natural way to spontaneous interactions',
        '❌ Productivity suffers from disconnection',
      ],
      visual: 'problem',
    },
    // Slide 3: Solution
    {
      title: 'Our Solution',
      subtitle: 'A warm, beautiful, character-driven workspace',
      bullets: [
        '✨ Kumospace-inspired aesthetic',
        '🎨 Beautiful 2.5D isometric design',
        '👥 Real character presence & interactions',
        '🎯 Seamless collaboration & engagement',
      ],
      visual: 'solution',
    },
    // Slide 4: Floors
    {
      title: 'Three Unique Floors',
      subtitle: 'Different spaces for different needs',
      floors: [
        { name: 'Floor 0: The Hub', desc: 'Co-working & collaboration', color: '#FF8B6B' },
        { name: 'Floor 1: Creative', desc: 'Design & content creation', color: '#D4A5D4' },
        { name: 'Floor 2: Innovation', desc: 'Future-focused labs & demos', color: '#A8E6CF' },
      ],
      visual: 'floors',
    },
    // Slide 5: Features
    {
      title: 'Core Features',
      subtitle: 'Everything teams need to thrive',
      features: [
        { icon: '👥', name: 'Character Presence', desc: 'Real avatars with status & proximity' },
        { icon: '🚪', name: 'Smart Rooms', desc: 'Organized spaces for every purpose' },
        { icon: '🔔', name: 'Smart Interactions', desc: 'Natural knock & call systems' },
        { icon: '📊', name: 'AI Insights', desc: 'Meeting analytics & optimization' },
      ],
      visual: 'features',
    },
    // Slide 6: Advertising
    {
      title: 'Premium Advertising Platform',
      subtitle: 'High-value brands in a premium environment',
      brands: [
        { name: 'Spotify', color: '#1DB954', desc: 'Music & culture' },
        { name: 'Standard Bank', color: '#0066B3', desc: 'Financial services' },
        { name: 'Vodacom', color: '#F39200', desc: 'Connectivity' },
      ],
      visual: 'advertising',
    },
    // Slide 7: Market Opportunity
    {
      title: 'Market Opportunity',
      subtitle: 'Massive and growing',
      metrics: [
        { label: 'Remote Workers', value: '1.5B+', trend: '↑ 35% YoY' },
        { label: 'Virtual Workspace TAM', value: '$50M+', trend: '↑ 45% CAGR' },
        { label: 'Avg Deal Value', value: '$250k/yr', trend: '↑ Expanding' },
        { label: 'Target Customers', value: '10k+', trend: '↑ Growing' },
      ],
      visual: 'market',
    },
    // Slide 8: Testimonials
    {
      title: 'Character Profiles',
      subtitle: 'Meet the FloorZero team',
      characters: [
        { name: 'Frank', role: 'Founder & Visionary', quote: 'Building the workspace of the future' },
        { name: 'Sam', role: 'Design Lead', quote: 'Beauty & functionality, perfectly balanced' },
        { name: 'Kay', role: 'Tech Lead', quote: 'Seamless, smooth, and always ready' },
      ],
      visual: 'team',
    },
    // Slide 9: Investment Tiers
    {
      title: 'Investment Tiers',
      subtitle: 'Multiple paths to growth',
      tiers: [
        { name: 'Seed', amount: '$500K', features: ['MVP Launch', 'Team of 5', 'First Customers'] },
        { name: 'Series A', amount: '$5M', features: ['Scale to 100 teams', '50+ Features', 'Full Platform'] },
        { name: 'Series B', amount: '$15M', features: ['Global Expansion', '1M+ Users', 'IPO Ready'] },
      ],
      visual: 'investment',
    },
    // Slide 10: Call to Action
    {
      title: 'Join Us',
      subtitle: 'Build the future of work',
      cta: 'Let\'s talk about your involvement',
      visual: 'cta',
    },
  ]

  const slide = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100

  return (
    <div className="w-full h-full flex flex-col bg-cream overflow-hidden">
      {/* Slide Container */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex-1 overflow-y-auto px-12 py-12"
      >
        <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
          {/* Slide 1: Cover */}
          {slide.visual === 'cover' && (
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-coral to-peach flex items-center justify-center text-6xl shadow-2xl"
              >
                Ⓕ
              </motion.div>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-coral via-lavender to-mint bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl text-charcoal font-light">{slide.subtitle}</p>
              <p className="text-lg text-charcoal/60">{slide.content}</p>
              <div className="grid grid-cols-3 gap-4 pt-8">
                {slide.stats.map(stat => (
                  <div key={stat} className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="font-bold text-lg bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent">
                      {stat.split(' ')[0]}
                    </p>
                    <p className="text-sm text-charcoal/60">{stat.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slides 2-3: Problem & Solution */}
          {(slide.visual === 'problem' || slide.visual === 'solution') && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="space-y-3">
                {slide.bullets.map((bullet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-xl text-charcoal flex items-center gap-3"
                  >
                    <span className="text-2xl">{bullet.split(' ')[0]}</span>
                    <span>{bullet.substring(2)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 4: Floors */}
          {slide.visual === 'floors' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {slide.floors.map((floor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-xl border-2"
                    style={{ borderColor: floor.color, backgroundColor: floor.color + '15' }}
                  >
                    <h3 className="text-xl font-bold text-charcoal mb-2">{floor.name}</h3>
                    <p className="text-charcoal/70">{floor.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 5: Features */}
          {slide.visual === 'features' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {slide.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <p className="text-4xl mb-2">{feature.icon}</p>
                    <h4 className="text-lg font-bold text-charcoal mb-1">{feature.name}</h4>
                    <p className="text-charcoal/60">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 6: Advertising */}
          {slide.visual === 'advertising' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {slide.brands.map((brand, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="h-40 rounded-xl flex flex-col items-center justify-center shadow-lg border-2 font-bold text-xl text-white cursor-pointer hover:shadow-xl transition-all"
                    style={{ borderColor: brand.color, backgroundColor: brand.color }}
                  >
                    <p>{brand.name}</p>
                    <p className="text-sm opacity-80">{brand.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 7: Market */}
          {slide.visual === 'market' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {slide.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-gradient-to-br from-coral/10 to-peach/10 rounded-lg border border-coral/20"
                  >
                    <p className="text-sm text-charcoal/60 mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-coral mb-2">{metric.value}</p>
                    <p className="text-sm font-semibold text-charcoal/70">{metric.trend}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 8: Team */}
          {slide.visual === 'team' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {slide.characters.map((char, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-white rounded-lg shadow-sm text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-coral to-peach flex items-center justify-center text-3xl text-white font-bold">
                      {char.name[0]}
                    </div>
                    <h4 className="text-lg font-bold text-charcoal mb-1">{char.name}</h4>
                    <p className="text-sm text-charcoal/60 mb-3">{char.role}</p>
                    <p className="text-sm italic text-charcoal/70">"{char.quote}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 9: Investment */}
          {slide.visual === 'investment' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-charcoal mb-4">{slide.title}</h2>
                <p className="text-2xl text-charcoal/60">{slide.subtitle}</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {slide.tiers.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white rounded-lg shadow-sm border-2 border-lavender hover:border-coral transition-all"
                  >
                    <h4 className="text-2xl font-bold text-charcoal mb-2">{tier.name}</h4>
                    <p className="text-3xl font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent mb-6">
                      {tier.amount}
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map(feat => (
                        <li key={feat} className="text-charcoal/70 flex items-center gap-2">
                          <span className="text-coral">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 10: CTA */}
          {slide.visual === 'cta' && (
            <div className="text-center space-y-8">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-coral to-lavender bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl text-charcoal/60">{slide.subtitle}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-coral to-peach text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {slide.cta} <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Controls */}
      <div className="bg-white/60 backdrop-blur-md border-t border-gray-soft px-12 py-6 flex items-center justify-between">
        {/* Progress bar */}
        <div className="flex-1 h-1 bg-gray-soft rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-coral to-peach"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Slide counter and navigation */}
        <div className="flex items-center gap-6 ml-8">
          <span className="text-sm font-medium text-charcoal/60">
            {currentSlide + 1} / {slides.length}
          </span>

          <div className="flex gap-3">
            <motion.button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="px-6 py-2 bg-coral text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-peach transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back
            </motion.button>

            <motion.button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className="px-6 py-2 bg-lavender text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-mint transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
