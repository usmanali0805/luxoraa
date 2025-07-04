// tailwind.config.js
export const content = ["./src/**/*.{js,jsx,ts,tsx,html}"];
export const theme = {
    extend: {
        keyframes: {
            'slide-in': {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(0)' },
            },
        },
        animation: {
            'slide-in': 'slide-in 0.4s ease-out forwards',
        },
    },
};
export const plugins = [];
