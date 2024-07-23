/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Componants/Sidebar.js",
    "./src/Componants/Category.js",
    "./src/Componants/Souscategory.js",
    "./src/Componants/ProductList/NavBar.js",
    "./src/Componants/Types.js",
    "./src/Componants/ProductList/Sidebar.js",
    "./src/Componants/ProductList/ProductList.js",
    "./src/Componants/ProductList/Filter_Sidebar.js",
    "./src/Componants/ProductList/ProductList.js",
    "./src/Componants/ProductList/NavBar.js",
    "./src/Componants/ProductList/Megamenu.js",
    "./src/Componants/Product_info.js",
    "./src/Componants/Panier.js",
    "./src/Componants/Dashboard.js",
    "./src/Componants/AdminProductlist.js",


  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#86b300', // Replace with the green color from the screenshot
        'custom-yellow': '#f7e600', // Customize this color to match the lighter yellow-green in your gradient
      },
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
    },
  },
  plugins: [require('daisyui'),

    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
}

