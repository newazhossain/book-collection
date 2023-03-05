const path = require('path');
const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': withOpacity('--color-primary-1'),
        'primary-2': withOpacity('--color-primary-2'),
        'primary-3': withOpacity('--color-primary-3'),
        'primary-4': withOpacity('--color-primary-4'),
        'primary-5': withOpacity('--color-primary-5'),
        'primary-6': withOpacity('--color-primary-6'),
        'primary-7': withOpacity('--color-primary-7'),
        'secondary-1': withOpacity('--color-secondary-1'),
        'secondary-2': withOpacity('--color-secondary-2'),
        'light': withOpacity('--color-white'),
        'dark': withOpacity('--color-black'),
        'purple-1': withOpacity('--color-purple-1'),
        'purple-2': withOpacity('--color-purple-2'),
        'red-1': withOpacity('--color-red-1'),
        'red-2': withOpacity('--color-red-2'),
        'orange-1': withOpacity('--color-orange-1'),
        'orange-2': withOpacity('--color-orange-2'),
        'yellow-1': withOpacity('--color-yellow-1'),
        'yellow-2': withOpacity('--color-yellow-2'),
        'green-1': withOpacity('--color-green-1'),
        'green-2': withOpacity('--color-green-2'),
      },
      fontSize: {
        'primary': ['0.875rem', { lineHeight: '1.25rem' }]
      },
      transitionDuration      : {
        '400': '400ms'
      },
      transitionTimingFunction: {
        'drawer': 'cubic-bezier(0.25, 0.8, 0.25, 1)'
      }
    },
  },
  plugins: [],
}