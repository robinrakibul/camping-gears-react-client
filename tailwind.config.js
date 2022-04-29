module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        waterbrush: ["Water Brush", "cursive"],
       },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}