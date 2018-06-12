/* Automatically generated by './build/bin/build-entry.js' */

import Message from '../packages/message/index.js';
import MessageBox from '../packages/message-box/index.js';
import Loading from '../packages/loading/index.js';
import DatePicker from '../packages/date-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import TimePicker from '../packages/time-picker/index.js';
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  DatePicker,
  TimeSelect,
  TimePicker,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '2.4.1',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Message,
  MessageBox,
  DatePicker,
  TimeSelect,
  TimePicker
};

module.exports.default = module.exports;
