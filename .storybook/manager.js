import {addons} from '@storybook/addons';
import theme from './polarisVueTheme';

addons.setConfig({
  previewTabs: {
    'canvas': {title: 'Preview'}
  },
  panelPosition: 'right',
  theme,
});
