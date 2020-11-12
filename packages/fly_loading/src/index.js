import FlyLoadingVue from "./fly_loading"
import merge from "../../../src/utils/merge"
import Vue from "vue"

const LoadingConstructor = Vue.extend(FlyLoadingVue)

LoadingConstructor.prototype.close = function(){
  this.isShow = false;
}
const defaults = {
  text:'加载中...',
  isShow:false
}
const Loading = function(options={}){
  if (typeof options === 'string') {
    options = {
      text: options,
      isShow:false
    }
  }
  options = merge(defaults, options);
  var parent = document.body;
  var instance = new LoadingConstructor({
    el:document.createElement('div'),
    data:options
  })
  parent.appendChild(instance.$el);
  Vue.nextTick(()=>{
    instance.showLoading()
  })
  return instance;//const loading  = this.$loading() 返回的fly_loading组件
}
export default Loading;