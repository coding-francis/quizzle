/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            display: ['drop-hover'],
            colors: {
                lemonGreen: '#38e9bb',
                lightBlue: '#E5F1FF',
                greyFontColor: '#525567',
                darkFontColor: '#101828',
                darkTheme1: '#041C32',
                darkTheme2: '#04293A',
                darkTheme3: '#064663',
                darkTheme4: '#011f38',
                darkThemeTextLight: '#6a82ad',
            },
            boxShadow: {
                custom: '1px 1px 30px rgba(0,0,0,0.08)'
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    }
};