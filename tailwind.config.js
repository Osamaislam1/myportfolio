/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                paper: {
                    DEFAULT: '#FAFAF8',
                    soft: '#F1F1EE',
                    lift: '#E9E9E5',
                },
                ink: {
                    DEFAULT: '#111110',
                    dim: '#4A4A46',
                    faint: '#8A8A83',
                },
                accent: {
                    DEFAULT: '#C8FF00',
                    ink: '#6F9E00',
                    dark: '#A3D000',
                    dim: 'rgba(200, 255, 0, 0.18)',
                },
            },
            fontFamily: {
                display: ['Space Grotesk', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
            },
            fontSize: {
                'display-xl': ['clamp(3.25rem, 12vw, 10rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
                'display-lg': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-md': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
            },
            boxShadow: {
                glow: '0 8px 32px rgba(17, 17, 16, 0.12)',
            },
            maxWidth: {
                content: '80rem',
            },
        },
    },
    plugins: [],
};
