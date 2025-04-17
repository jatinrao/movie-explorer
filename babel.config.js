module.exports = (api) => {
  const isDev = api.env("development");
  api.cache(true); // cache for performance, unless you want dynamic reloads

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean),
  };
};
