/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Webex_Flow Scoped Palette
        wf: {
          aubergine: {
            DEFAULT: '#17152B',
            dark: '#110F20',
            light: '#1F1C38',
          },
          plum: {
            DEFAULT: '#292344',
            light: '#342D54',
            dark: '#201A36',
          },
          lavender: {
            DEFAULT: '#F3F0F8',
            light: '#FAF8FD',
            dark: '#E7E2F0',
          },
          violet: {
            DEFAULT: '#8B72D9',
            hover: '#7A61C8',
            subtle: 'rgba(139, 114, 217, 0.14)',
          },
          teal: {
            DEFAULT: '#45C6B0',
            hover: '#3BB09C',
            subtle: 'rgba(69, 198, 176, 0.14)',
          },
          darkText: '#25213A',
          mutedText: '#A9A3BA',
          mutedLight: '#6C667E',
          borderSubtle: '#DED9E9',
          borderDark: '#352D57',
        },
        // Existing palettes preserved
        charcoal: {
          DEFAULT: '#111820',
          dark: '#0B1015',
          light: '#18212C',
        },
        ivory: {
          DEFAULT: '#F4F1EA',
          light: '#FAF8F5',
          dark: '#EAE5DB',
        },
        slate: {
          deep: '#263746',
          muted: '#364D61',
        },
        electric: {
          DEFAULT: '#5276D9',
          hover: '#4163C5',
          light: '#7291E4',
          subtle: 'rgba(82, 118, 217, 0.12)',
        },
        steel: {
          DEFAULT: '#A7B0B8',
          light: '#CCD3D9',
          dark: '#73808C',
        },
        border: {
          subtle: '#D9D8D2',
          subtleDark: '#263746',
          light: '#E5E2D9',
          dark: 'rgba(255, 255, 255, 0.10)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        widest: '0.12em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 30px -10px rgba(17, 24, 32, 0.08), 0 4px 12px -4px rgba(17, 24, 32, 0.04)',
        'elevated-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 35px -10px rgba(38, 55, 70, 0.15)',
        'focus-electric': '0 0 0 3px rgba(82, 118, 217, 0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
