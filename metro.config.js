// native-pytech/metro.config.js (dentro de la librería)
module.exports = function withNativePytechMetro(config) {
  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...config.resolver,
    assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...config.resolver.sourceExts, 'svg'],
  };
  return config;
};