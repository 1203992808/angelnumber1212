import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748bfc',
          500: '#5c6cf5',
          600: '#4d4fe8',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        mystical: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        gold: {
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cosmic-pattern': 'url("/cosmic-pattern.png")',
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.dark.200'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.primary.100'),
            '--tw-prose-links': theme('colors.primary.300'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.dark.400'),
            '--tw-prose-bullets': theme('colors.dark.400'),
            '--tw-prose-hr': theme('colors.dark.700'),
            '--tw-prose-quotes': theme('colors.primary.200'),
            '--tw-prose-quote-borders': theme('colors.primary.700'),
            '--tw-prose-captions': theme('colors.dark.400'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.dark.200'),
            '--tw-prose-pre-bg': theme('colors.dark.800'),
            '--tw-prose-th-borders': theme('colors.dark.600'),
            '--tw-prose-td-borders': theme('colors.dark.700'),
          },
        },
      }),
      boxShadow: {
        'inner-glow': 'inset 0 0 15px 0 rgba(124, 58, 237, 0.15)',
        'neon': '0 0 15px 0 rgba(124, 58, 237, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config; 