import Vue from 'vue';
import FlyMessageVue from "./fly_message"

//  const typeMap = {
//     success: '',
//     info: 'info',
//     warning: 'warning',
//     error: 'error',
//   };
  const defaults = {
    show:false,
    content: "这是一条成功的提示 ",
    type: "success",
    duration:'2000',
    top: 30,
  }
  const MessageConstructor = Vue.extend(FlyMessageVue);
  MessageConstructor.prototype.close= function(){
      let vm = this;
      vm.$on('after-leave',()=>{
          if(vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el);
          }
          this.$destroy();
      })
      vm.show = false;
  }
  const Message = (options={})=>{
    if (Vue.prototype.$isServer) return;
    options = Object.assign({}, defaults, options);
    let parents = document.body;
    let instance = new MessageConstructor({
        el:document.createElement('div'),
        data:options
    })
    parents.appendChild(instance.$el)
    Vue.nextTick(()=>{
        instance.show = true;
        setTimeout(()=>{
            instance.close()
        },instance.duration)
    })
    return instance;
  }
  export default Message;
