import FlyBtn from './src/fly_btn'

// 为组件提供 install 安装方法，供按需引入
FlyBtn.install = function (Vue) {
  Vue.component(FlyBtn.name, FlyBtn)
}

// 默认导出组件
export default FlyBtn

