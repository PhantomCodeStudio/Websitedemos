# FloorZero — Setup & Development Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 3. Switch Views
- **Workspace**: Interactive 2.5D isometric workspace with 3 floors
- **Investor Deck**: 10-slide premium presentation deck

## 📁 Project Structure

```
FloorZero/
├── src/
│   ├── components/
│   │   ├── FloorZero.jsx              # Main workspace interface
│   │   ├── IsometricWorkspace.jsx     # 2.5D visualization engine
│   │   ├── Character.jsx              # Character avatar component
│   │   └── InvestorDeck.jsx           # Investor presentation
│   ├── App.jsx                        # App router
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Tailwind styles
├── index.html
├── package.json
├── tailwind.config.js                 # Theme configuration
├── vite.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design System

### Color Palette (Warm & Inviting)
- **Cream** (#F9F8F6) — Primary background
- **Coral** (#FF8B6B) — Primary accent
- **Peach** (#F08080) — Secondary accent
- **Lavender** (#D4A5D4) — Tertiary accent
- **Mint** (#A8E6CF) — Quaternary accent
- **Gold** (#F7DC6F) — Highlight accent
- **Charcoal** (#2C3E50) — Text color
- **Gray Soft** (#E8E8E8) — Subtle backgrounds

### Typography
- Sans-serif system font family
- Large, bold headings for impact
- Readable body text at 16px base

## 🏗️ Architecture

### FloorZero Workspace
The main workspace features:

1. **Floor Navigation**
   - 3 unique floors: Hub, Creative, Innovation
   - Smooth transitions with Framer Motion
   - Floor-specific room layouts

2. **Isometric Visualization**
   - SVG-based 2.5D isometric rendering
   - Custom projection engine
   - Animated room shapes with gradients

3. **Character System**
   - 7 character profiles (Frank, Sam, Kay, Bright, Zuri, Nkosi, Temi)
   - Real-time presence indicators
   - Status rings and proximity halos

4. **Interaction Model**
   - Room selection and hover states
   - Knock notification system
   - AI insights panel with metrics

5. **Premium Advertising**
   - Spotify, Standard Bank, Vodacom
   - Branded colors and styling
   - Premium integration

### Investor Deck
10 premium slides:

1. **Cover** — Branding & key stats
2. **Problem** — Market pain points
3. **Solution** — FloorZero's approach
4. **Floors** — 3-floor layout showcase
5. **Features** — Core capabilities
6. **Advertising** — Revenue model
7. **Market** — Opportunity & metrics
8. **Team** — Character profiles
9. **Investment** — Funding tiers
10. **CTA** — Call to action

Navigation with progress bar and slide counter.

## 🛠️ Customization

### Add New Floors
Edit `src/components/FloorZero.jsx`:

```javascript
const floors = [
  {
    name: 'Your Floor',
    description: 'Floor description',
    color: 'from-coral to-peach',
    rooms: [
      // Add rooms here
    ],
  },
  // ...
]
```

### Add New Rooms
```javascript
{
  id: 'unique-id',
  name: 'Room Name',
  pos: { x: 0, y: 0 },
  width: 100,
  height: 60,
  color: '#FF8B6B',
}
```

### Modify Colors
Edit `tailwind.config.js` under `theme.extend.colors`

### Update Investor Deck
Edit `src/components/InvestorDeck.jsx` slides array

## 📦 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Output in `dist/` directory

### Preview Built Version
```bash
npm run preview
```

## 🚢 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Static Host (GitHub Pages, etc)
Upload contents of `dist/` folder

## 🎬 Animations

Uses **Framer Motion** for:
- Room transitions
- Character floating animations
- Notification slides
- Button interactions
- Slide changes in investor deck

All animations are smooth, performance-optimized, and GPU-accelerated.

## 📱 Responsive Design

- Desktop-first responsive design
- Tailwind breakpoints: sm, md, lg, xl
- Mobile-optimized interface
- Touch-friendly buttons and interactions

## 🔧 Technologies

- **React 18.2** — UI framework
- **Vite 5.0** — Ultra-fast build tool
- **Tailwind CSS 3.3** — Utility CSS
- **Framer Motion 10** — Advanced animations
- **Lucide React 1.16** — Icon library
- **PostCSS** — CSS preprocessing

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Build Errors
Clear cache and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Dependencies Issues
```bash
npm audit fix
npm install --legacy-peer-deps
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📞 Support

For issues or questions, refer to component source files or create detailed issue reports.

---

**FloorZero** — Building the future of work, one floor at a time. 🚀