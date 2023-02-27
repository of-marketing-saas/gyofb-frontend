// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetify
import { createVuetify } from 'vuetify';
import { VDataTable } from 'vuetify/labs/VDataTable';

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
