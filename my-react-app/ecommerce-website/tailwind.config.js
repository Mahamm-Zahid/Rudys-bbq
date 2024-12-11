module.exports = {
  // ... other configurations ...
  theme: {
    extend: {
      width: {
        '290': '290px',
        '258': '258px',
        '234': '234px',
        '290': '290px',
        '1170': '1170px',
      },
      height: {
        '115': '115px',
        '12': '12px',
      },
      fontSize: {
        '15px': '15px',
      },
      fontFamily: {
        'house-slant': ['House Slant', 'script'],
      },
    },
  },
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include your source files
    './index.html', // Include your HTML file
  ],
};
