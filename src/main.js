import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Button from '../packages/components/button'
// import Icon from '../packages/components/icon';
// import Input from '../packages/components/input';
// import InputNumber from '../packages/components/input-number';
// import Radio from '../packages/components/radio';
// import RadioGroup from '../packages/components/radio-group';
// import CheckBox from '../packages/components/checkbox';
// import CheckBoxGroup from '../packages/components/checkbox-group';
// import Uploader from '../packages/components/uploader';
// import Form from '../packages/components/form';
// import FormItem from '../packages/components/form-item';
// import Toast from '../packages/components/toast';
// import Modal from '../packages/components/modal';
// import MessageBox from '../packages/components/message-box';
// import Message from '../packages/components/message';
import GuangUI from '../packages'

Vue.config.productionTip = false

Vue.use(GuangUI)
// Vue.use (Icon)
//   .use (Button)
//   .use (Input)
//   .use (InputNumber)
//   .use (Radio)
//   .use (RadioGroup)
//   .use (CheckBox)
//   .use (CheckBoxGroup)
//   .use (Uploader)
//   .use (Form)
//   .use(FormItem);
  
//   Vue.use (Toast).use (Modal).use (MessageBox).use (Message);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
