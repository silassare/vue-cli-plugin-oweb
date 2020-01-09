import Vue from 'vue';
import app from '@/app';
import '@/i18n/index';
import '@/settings/fv';
import '@/utils/directives';
import '@/utils/filters';
import '@/oweb.custom';
import { vuePlugin } from '@/utils/helpers';
import launcher from '@/utils/launcher';
import { scriptLoader } from 'oweb';

const src = app.configs.get('OW_APP_UPDATER_SCRIPT_SRC');

if (src) {
	scriptLoader.tryLoad(src, undefined, undefined, true);
}

Vue.use(vuePlugin);

Object.freeze(app);

launcher(app).launch();
