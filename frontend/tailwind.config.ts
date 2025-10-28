import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode palette
        pl: {
          bg: '#F9FAFB',
          card: '#FFFFFF',
          primary: '#2563EB',
          secondary: '#4F46E5',
          text: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
          success: '#10B981',
          error: '#EF4444',
        },
        // Dark mode palette
        pld: {
          bg: '#0F172A',
          card: '#1E293B',
          primary: '#38BDF8',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: '#334155',
          success: '#34D399',
          error: '#F87171',
        },
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
        heading: ['Poppins', 'Inter', 'system-ui', 'ui-sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New'],
      },
    },
  },
  plugins: [],
} satisfies Config
