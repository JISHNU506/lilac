/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    variants: {
      extend: {
        backgroundColor: ['hover', 'active'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

