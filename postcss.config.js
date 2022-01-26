module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "postcss-px-to-viewport",
      {
        viewportWidth: 750,
        viewportHeight: 1334,
        unitPrecision: 2,
        viewportUnit: "vw",
        selectorBlackList: ["ignore"],
        minPixelValue: 1,
        mediaQuery: false,
        exclude: [],
      },
    ],
  ],
};
