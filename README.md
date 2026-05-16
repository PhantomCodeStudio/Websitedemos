# FloorZero — Premium Virtual Workspace Visualizer

A **beautiful, warm, and inviting 2.5D isometric virtual workspace** inspired by Kumospace's modern aesthetic. Includes an interactive workspace with 3 unique floors and a premium investor's pitch deck.

## Features

✨ **Beautiful Design**
- Warm, inviting color palette (coral, lavender, mint, gold)
- 2.5D isometric workspace visualization
- Smooth Framer Motion animations
- Character-driven presence system

🎯 **Interactive Workspace**
- 3 unique floors with different layouts
- Smart room selection and interaction
- Character presence with status indicators
- Knock notification system
- AI insights panel
- Premium advertising platform

📊 **Investor Deck**
- 10 premium presentation slides
- Market opportunity, features, team profiles
- Investment tiers and monetization strategy
- Beautiful gradient designs and smooth transitions

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── FloorZero.jsx           # Main workspace component
│   │   ├── IsometricWorkspace.jsx  # 2.5D canvas visualization
│   │   ├── Character.jsx           # Character component
│   │   └── InvestorDeck.jsx        # 10-slide investor presentation
│   ├── App.jsx                     # Main app with navigation
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── tailwind.config.js              # Warm color palette
├── postcss.config.js
└── vite.config.js
```

## Color Palette

- **Primary**: Cream (#F9F8F6)
- **Accent 1**: Coral (#FF8B6B)
- **Accent 2**: Lavender (#D4A5D4)
- **Accent 3**: Mint (#A8E6CF)
- **Accent 4**: Gold (#F7DC6F)
- **Text**: Charcoal (#2C3E50)

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Key Features Breakdown

### Workspace
- **Floor Switching**: Smooth transitions between 3 unique floors
- **Interactive Rooms**: Click rooms to select and interact
- **Character Presence**: See team members with status indicators
- **Proximity System**: Visual halos around characters
- **Knock System**: Send notifications to rooms

### Investor Deck
- **10 Slides**: Cover, problem, solution, floors, features, advertising, market opportunity, team, investment tiers, CTA
- **Smooth Navigation**: Previous/next navigation with progress bar
- **Responsive Design**: Works on all screen sizes
- **Premium Styling**: Gradients, animations, and professional layout

## Development

To customize:

1. **Colors**: Edit `tailwind.config.js` to adjust the warm palette
2. **Rooms**: Modify floor layouts in `src/components/FloorZero.jsx`
3. **Characters**: Update character list and properties
4. **Slides**: Edit slide content in `src/components/InvestorDeck.jsx`

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## License

All rights reserved © FloorZero 2025
