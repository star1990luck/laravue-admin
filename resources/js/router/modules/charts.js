/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/views/layout/Layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noredirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/Keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'keyboardChart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/Line'),
      name: 'LineChart',
      meta: { title: 'lineChart', noCache: true }
    },
    {
      path: 'mixchart',
      component: () => import('@/views/charts/MixChart'),
      name: 'MixChart',
      meta: { title: 'mixChart', noCache: true }
    }
  ]
}

export default chartsRouter
