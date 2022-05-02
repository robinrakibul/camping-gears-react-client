module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        waterbrush: ["Water Brush", "cursive"],
        librebodoni: ["Libre+Bodoni", "Poppins"],
       },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}