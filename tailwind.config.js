module.exports = {
  darkMode: 'class',
  extend: {
    animation: {
      blur: 'blur-in 1s ease-in-out forwards',
    },
    keyframes: {
      blur: {
        '0%': { 'backdrop-filter': 'blur(8px)' },
        '100%': { 'backdrop-filter': 'blur(24px)' }
      },
    },
  },
}
