export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F8F6",
        "cream-dark": "#F0EEEA",
        coral: "#FF8B6B",
        peach: "#F08080",
        lavender: "#D4A5D4",
        "lavender-light": "#E8D4F0",
        mint: "#A8E6CF",
        "mint-light": "#C8F0E0",
        gold: "#F7DC6F",
        "gold-light": "#FFF8DC",
        charcoal: "#2C3E50",
        "gray-soft": "#E8E8E8",
        "gray-light": "#F5F5F5",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 139, 107, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 139, 107, 0.6)" },
        },
      },
    },
  },
  plugins: [],
}
