/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        orangada: '#fa4616',
        lightOrangada: 'rgba(250,70,22, 0.6)',
        border: '#efefef',
        navBorder: '#c8c8c8',
        blueberryLight: 'rgba(9, 45, 77, 0.8)',
        blueberry: 'rgba(9, 45, 77, 1)',
        darkBerry: 'rgb(5, 28, 48)',
      },
      minHeight: {
        maxScreen: '100svh',
      },
      height: {
        customHeight: '80svh',
        imageHeight: '70svh',
        mobileCustomHeight: '100svh',
        navigationHeight: '60px',
      },
      width: {
        imageWidth: '65svh',
      },
      fontFamily: {
        staatliches: ['Staatliches', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('/Home.jpg')",
        create: "url('/Create.jpg')",
        register: "url('/Register.jpg')",
        login: "url('/Login.jpg')",
        error: "url('/Error.jpg')",
      },
      letterSpacing: {
        wider: '.05em',
      },
      padding: {
        '15rem': '15rem',
      },
      borderWidth: {
        '1px': '1px',
      },
      zIndex: {
        100: '100',
      },
    },
  },
};
