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
                "black-rgba": "rgba(0, 0, 0, 0.1)",
                "dark-black-rgba": "rgba(0, 0, 0, 0.5)",
            },
            screens: {
                supportshover: { raw: "(hover: hover)" },
                "max-2xl": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                "max-xl": { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                "max-lg": { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                "max-md": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "max-sm": { max: "639px" },
                // => @media (max-width: 639px) { ... }
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

            borderColor: {
                "white-25": "rgb(238, 238, 238)",
            },
        },
    },
    plugins: [],
};
