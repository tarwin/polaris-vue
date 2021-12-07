const path = require('path');
const postcssModules = require('postcss-modules');
const classConfig = require('../build/namespaced-classname');

module.exports = {
  stories: [
    './stories/**/*.stories.mdx',
    '../src/**/README.stories.mdx',
  ],
  framework: '@storybook/vue',
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        include: [path.resolve(__dirname, '../src')],
        exclude: ['*.mdx'],
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.pug$/,
        use: ['pug-plain-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    );

    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
      'vue': 'vue/dist/vue.js',
      // '^polaris-react/*': path.resolve(__dirname, '..', 'node_modules/polaris-react'),
    };

    // Return the altered config
    return config;
  },
}
