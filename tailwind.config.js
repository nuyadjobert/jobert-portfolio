/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        void: "#07080c",
        panel: "#101218",
        raised: "#161922",
        line: "rgba(232, 220, 196, 0.12)",
        cream: "#f3ead8",
        mute: "#9a9184",
        gold: "#d4b483",
        flare: "#f0d4a4",
        mist: "#8fb4c4",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Outfit", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        mega: "0.18em",
      },
      boxShadow: {
        glow: "0 0 80px rgba(212, 180, 131, 0.12)",
        card: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
