const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss("./tailwind.config.js"),
    cssnano({
      preset: "default"
    }),
    autoprefixer()
  ]
};
