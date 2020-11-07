import Installation from '../components/installation'
import FlyIcon from '../components/fly-icon.vue'
import ButtonDemo from '../components/button.vue'
import BaseComponent from '../components/basecomponent.vue'

export default [{
    path: '/component/installation',
    name: 'Installation',
    component: Installation,
    meta: {
      title: '组件|Fly-UI'
    }
  },
  {
    path: '/component/icon',
    name: 'FlyIcon',
    component: FlyIcon,
    meta: {
      title: '组件|Fly-UI'
    }
  },

  {
    path: '/component/button',
    name: 'ButtonDemo',
    component: ButtonDemo,
    meta: {
      title: '组件|Fly-UI'
    }
  },
  {
    path: '/component/basecomponent',
    name: 'BaseComponent',
    component: BaseComponent,
    meta: {
      title: '组件|Fly-UI'
    }
  },

]