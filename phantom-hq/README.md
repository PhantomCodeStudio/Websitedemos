# Phantom HQ

A React Progressive Web Application (PWA) powered by Claude AI.

## Features

- **AI-Powered Chat**: Interact with Claude AI directly from your browser
- **Progressive Web App**: Install and use offline-capable PWA
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Built with React 18 and contemporary styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/xophersleepwalker/phantom-hq.git
   cd phantom-hq
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Anthropic API key to `.env.local`:
   ```
   REACT_APP_ANTHROPIC_KEY=your_api_key_here
   ```

### Running the App

**Development mode:**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

**Production build:**
```bash
npm build
```

## Environment Variables

- `REACT_APP_ANTHROPIC_KEY` (required): Your Anthropic API key from [console.anthropic.com](https://console.anthropic.com/)

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Add the `REACT_APP_ANTHROPIC_KEY` environment variable
5. Deploy!

## Technologies

- React 18
- JavaScript (ES6+)
- CSS3
- Anthropic API

## License

MIT

## Author

Created for xophersleepwalker
