module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Put Reanimated plugin **last** as recommended in docs
      "react-native-reanimated/plugin",
    ],
  };
};
