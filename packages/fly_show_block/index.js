import FlyShowBlock from './src/fly_show_block'

FlyShowBlock.install = function(Vue){
  Vue.component(FlyShowBlock.name, FlyShowBlock)
}
export default FlyShowBlock;