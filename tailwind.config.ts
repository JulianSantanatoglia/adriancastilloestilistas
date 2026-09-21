import type { Config } from 'tailwindcss'

// Tokens de diseño. Al cambiar de cliente, solo se tocan estos valores.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F5F0',
        surface: '#F2ECE4',
        text: '#211D1A',
        muted: '#8A8078',
        // Variante de --color-muted con contraste AA (>=4.5:1) sobre background/surface, para texto pequeño.
        'muted-ink': '#6B625B',
        footer: '#1A1613',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
