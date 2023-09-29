// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors:{
                pc:"#343A40" // primary gray color
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}