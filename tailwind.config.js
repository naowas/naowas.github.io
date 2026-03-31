/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d8eaff",
          300: "#89c0ff",
          500: "#368cf6",
          700: "#1f63bc"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(80,150,255,0.25), 0 8px 28px rgba(31, 99, 188, 0.28)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(104, 143, 255, 0.15) 1px, transparent 0)",
        "brand-gradient": "linear-gradient(135deg, #368cf6 0%, #8a6bff 100%)"
      },
      animation: {
        float: "float 10s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};
