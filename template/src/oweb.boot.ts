import Vue from 'vue';
import app from '@/app';
import '@/i18n/index';
import '@/settings/fv';
import '@/utils/directives';
import '@/utils/filters';
import '@/oweb.custom';
import { vuePlugin } from '@/utils/helpers';
import launcher from '@/utils/launcher';

Vue.use(vuePlugin);

Object.freeze(app);

launcher(app).launch();
