module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '@',
          rootPathSuffix: ''
        }
      ]
    ],
    env: {
      production: {
        plugins: [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '@',
            rootPathSuffix: ''
          }
        ]
      }
    }
  };
  
};
