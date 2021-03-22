import Vue from 'vue';
import FlyMessageVue from "./fly_message"

  const typeMap = ['success','info','warning','error'];
  const defaults = {
    show:false,
    content: "这是一条默认的提示 ",
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
  // let instance;
  // let instances = [];
  // let hasMessage = false;
  const Message = (options={})=>{
    
    if (Vue.prototype.$isServer) return;
    if(typeof options=== 'string'){
      options = {
        content:options
      }
    }else{
      options = Object.assign({}, defaults, options);
    }
   
    let parents = document.body;
    let instance = new MessageConstructor({
        el:document.createElement('div'),
        data:options
    })
    // if(hasMessage){
    //   hasMessage= false
    //   instances[0].close()
    //   instances = []
    // }
    instance.$mount();
    parents.appendChild(instance.$el)
    // let verticalOffset = options.top || 30;
    // instances.forEach(element => {
    //   verticalOffset += element.$el.offsetHeight+20
    // });
    // instance.show = true;
    // instance.top = verticalOffset;
    // instances.push(instance);
    Vue.nextTick(()=>{
        instance.show = true;
        setTimeout(()=>{
            instance.close()
        },instance.duration)
    })
    return instance;
  }
  typeMap.forEach(type => {
    Message[type] = options => {
      if (typeof options === 'string') {
        options = {
          content: options
        };
      }
      options.type = type;
      return Message(options);
    };
  });
  
  export default Message;
