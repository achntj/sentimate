const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
