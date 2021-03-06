const path = require('path')
const localPath = 'C:\\Users\\dalci\\playground\\native-web-ts'
const jestScriptPath = '\\node_modules\\react-scripts-ts\\config\\jest\\'

module.exports = {
  webpack: function(config, env) {
    const babelLoader = {
      test: /\.(js|jsx)$/,
      include: [
        /node_modules[\\\/]react-native-(?!(vector-icons|web|material-design-styles)).*/,
      ],
      loader: 'babel-loader',
      options: {
        babelrc: false,
        plugins: ['react-native-web/babel'],
        presets: ['react-native'],
        cacheDirectory: false,
      },
    }
    config.module.rules.push(babelLoader)
    config.resolve.alias['react-native-vector-icons'] =
      'react-native-vector-icons/dist'
    return config
  },
  jest: function(config) {
    config = {
      mapCoverage: true,
      collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
      setupFiles: [
        localPath + '\\node_modules\\react-scripts-ts\\config\\polyfills.js',
        localPath + '\\setupJest.js',
      ],
      setupTestFrameworkScriptFile: undefined,
      testMatch: [
        '<rootDir>/src/**/__tests__/**/*.ts?(x)',
        '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
      ],
      testEnvironment: 'node',
      testURL: 'http://localhost',
      transform: {
        '^.+.css$': localPath + jestScriptPath + 'cssTransform.js',
        '^.+.tsx?$': localPath + jestScriptPath + 'typescriptTransform.js',
        '^(?!.*.(js|jsx|css|json)$)':
          localPath + jestScriptPath + 'fileTransform.js',
        '[/\\\\]node_modules[/\\\\]react-native-material-ui.+\\.(js|jsx)$':
          'babel-jest',
      },
      transformIgnorePatterns: [
        //'[/\\\\]node_modules[/\\\\]?!(react-native-material-ui[/\\\\]).+\\.(js|jsx|ts|tsx)$',
        'node_modules/(?!react-native-material-ui).*',
      ],
      moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^react-native-vector-icons/MaterialIcons$':
          'react-native-vector-icons/dist/MaterialIcons',
      },
      moduleFileExtensions: [
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'web.js',
        'js',
        'web.jsx',
        'jsx',
        'json',
        'node',
      ],
      globals: {
        'ts-jest': { tsConfigFile: localPath + '\\tsconfig.test.json' },
      },
      rootDir: localPath,
    }
    return config
  },

  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      // Edit config here - example: set your own certificates.
      //
      // const fs = require('fs');
      // config.https = {
      //   key: fs.readFileSync(process.env.REACT_HTTPS_KEY, 'utf8'),
      //   cert: fs.readFileSync(process.env.REACT_HTTPS_CERT, 'utf8'),
      //   ca: fs.readFileSync(process.env.REACT_HTTPS_CA, 'utf8'),
      //   passphrase: process.env.REACT_HTTPS_PASS
      // };

      return config
    }
  },
}
