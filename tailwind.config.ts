import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'background-light': '#FAF2E5',
                'primary': '#F5DFC1',
                'secondary': '#8FAD9C',
                'accent': '#C6C8BD',
            },
            fontFamily: {
                sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
