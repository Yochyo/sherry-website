const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  let newUtilities = {};

  steps.forEach(it => {
    newUtilities[`.min-w-${it}`] = {
      'min-width': `${it}rem`,
    };
  });
  addUtilities(newUtilities, {
    variants: ['responsive', 'hover'],
  });
});

const steps = [1, 2, 6, 4, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 52, 56, 60, 64, 72, 80, 88, 96];
