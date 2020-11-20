import Installation from '../views/installation'
import FlyIcon from '../views/fly-icon.vue'
import ButtonDemo from '../views/button.vue'
import Loading from '../views/notice/loading.vue'
import Backtop from '../views/others/backtop.vue'
export default [{
    path: '/views/installation',
    name: 'Installation',
    component: Installation,
    meta: {
      title: '组件|Fly-Installation'
    }
  },
  {
    path: '/views/icon',
    name: 'FlyIcon',
    component: FlyIcon,
    meta: {
      title: '组件|Fly-icon'
    }
  },

  {
    path: '/views/button',
    name: 'ButtonDemo',
    component: ButtonDemo,
    meta: {
      title: '组件|Fly-UI'
    }
  },
  {
    path: '/views/notice/loading',
    name: 'Loading',
    component: Loading,
    meta: {
      title: '组件|Fly-Loading'
    }
  },
  {
    path: '/views/others/backtop',
    name: 'backtop',
    component: Backtop,
    meta: {
      title: '组件|Fly-Backtop'
    }
  },
]