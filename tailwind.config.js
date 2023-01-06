module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'bg': '#F1F2F4',
          'green': '#0BB634',
          gray: {
            'primary': '#e6e8ec',
            'secondary': '#787E8E'
          }
        }
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif']
      },
      fontSize: {
        28: '28px'
      },
      boxShadow: {
        'primary': '0px 1px 2px rgba(0, 0, 0, 0.25)',
        'modal': '0px 2px 7px rgba(0, 0, 0, 0.25)',
        'card': '0px 2px 10px rgb(17 20 45 / 12%)'
      },
      backgroundImage: {
        'bottom-gradient': 'linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0) 100%)'
      }
    },
  },
  plugins: [],
}
