/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom-black": "#252525",
            },
            screens: {
                supportshover: { raw: "(hover: hover)" },
            },
            keyframes: {
                "spin-slow": {
                    "50%": {
                        transform: "rotate(360deg)",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
            },
            animation: {
                "spin-slow": "spin-slow 2.75s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
