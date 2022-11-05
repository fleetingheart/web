/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    vanilla: "#ffebbe",
                    light: "#feefd0"
                },
                crayon: "#8e8677",
                "crayon-dark": "#706a5d"
            }
        },

    },
    plugins: [],
}
