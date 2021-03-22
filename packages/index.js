import '../public/theme/font/iconfont.css';
import '../public/theme/base.scss';
import utils from '../src/utils/index'
import fly_btn from './fly_btn'
import fly_anchor from './fly_anchor'
import fly_anchor_link from './fly_anchor_link'
import fly_backtop from './fly_backtop'
import fly_table_simple from './fly_table_simple'
import fly_show_block from './fly_show_block'
import fly_loading from './fly_loading'
import fly_message from './fly_message'
// 存储组件列表
const components = [
  fly_btn,
  fly_anchor,
  fly_anchor_link,
  fly_backtop,
  fly_table_simple,
  fly_show_block,
  // fly_loading,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$Flyloading = fly_loading;
  Vue.prototype.$Flymessage = fly_message;
  Vue.prototype.$utils = utils;
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表  
  fly_btn,
  fly_backtop,
  fly_anchor_link,
  fly_table_simple,
  fly_show_block
}