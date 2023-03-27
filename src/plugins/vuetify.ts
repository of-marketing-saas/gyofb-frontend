// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetify
import { createVuetify } from 'vuetify';
import { VDataTable } from 'vuetify/labs/VDataTable';

const light = {
  dark: false,
  colors: {
    primary: '#2196F3',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
};

const dark = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#03dac6',
    error: '#f44336',
    info: '#2196F3',
    success: '#4caf50',
    warning: '#fb8c00',
  },
};

export default createVuetify({
  components: {
    ...components,
    VDataTable,
  },
  directives,
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
