import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  //  第一种引用组件：
  //  这里的使用render（我还没有认真看render的API）,我感觉就是 将App组件放到这个函数内，#appDOM中就不需写<App></App>了
  // render: h => h(App)
  //  第二种引用组件：
  //  直接在里面写App组件，在父组件中写<App></App>，这里的父组件就是#app
    components:{
      App
  }
});
