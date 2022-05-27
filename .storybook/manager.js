import {addons} from '@storybook/addons';
import theme from './polarisVueTheme';

addons.setConfig({
  previewTabs: {
    'canvas': {title: 'Preview'}
  },
  panelPosition: 'right',
  sidebar: {
    // showRoots: false,
  },
  theme: create({
    base: 'light',
    brandTitle: 'Ownego Polaris Storybook',
    brandUrl: '/',
    brandImage: 'https://github.com/ownego/polaris-vue/blob/master/public/images/brand.png?raw=true',
    appBorderRadius: 0,
    colorPrimary: '#008060',
    colorSecondary: '#008060',
    appBg: '#f6f6f7',
    contentBg: '#f6f6f7',
    textColor: '#202223',
  }),
});
