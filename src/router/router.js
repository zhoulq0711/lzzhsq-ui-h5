import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home,
      redirect:'login',
      meta: {
        title: '首页',
        level:1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta: {
        title: '登录',
        level:1
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '首页',
        level:1
      }
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import('../views/demo/index.vue'),
      meta: {
        title: '首页',
        level:1
      },
      children:[
         {
          path: '/',
          name: 'main',
          component: ()=>import('../views/demo/main.vue'),
          meta: {
            title: '首页',
            level:1
          }
         },
         {
          path: '/my',
          name: 'my',
          component: ()=>import('../views/demo/my.vue'),
          meta: {
            title: '我的',
            level:1
          }
         }
      ]
    },
    {
      path: '/retrunpage',
      name: 'retrunpage',
      component: ()=>import('../views/demo/retrunpage.vue'),
      meta:{
        title:'居住证业务办理'
     }
    },
    {
      path: '/retsuccess',
      name: 'retsuccess',
      component: ()=>import('../views/demo/retsuccess.vue'),
      meta:{
        title:'居住证业务办理'
     }
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: ()=>import('../views/demo/addAddress.vue'),
      meta:{
        title:'添加收件地址'
     }
    },
    {
      path: '/express_list',
      name: 'express_list',
      component: ()=>import('../views/demo/express_list.vue'),
      meta:{
        title:'寄送与确认收件'
     }
    },
    {
      path: '/express',
      name: 'express',
      component: ()=>import('../views/demo/express.vue'),
      meta:{
        title:'寄送与确认收件'
     }
    },
    {
      path: '/express1',
      name: 'express1',
      component: ()=>import('../views/demo/express1.vue'),
      meta:{
        title:'寄送与确认收件'
     }
    },
    {
      path: '/express_list_nav',
      name: 'express_list_nav',
      component: ()=>import('../views/demo/express_list_nav.vue'),
      meta:{
        title:'寄送与确认收件'
     }
    },
    {
      path: '/express_haspic',
      name: 'express_haspic',
      component: ()=>import('../views/demo/express_haspic.vue'),
      meta:{
        title:'寄送与确认收件'
     }
    },
    {
      path: '/cardriver',
      name: 'cardriver',
      component: ()=>import('../views/demo/carDriver.vue'),
      meta:{
        title:'驾驶证转入换证'
     }
    },
    {
      path: '/listinfo',
      name: 'listinfo',
      component: () => import('../views/demo/listinfo.vue'),
      meta: {
        title: '列表信息',
      }
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../views/demo/business.vue'),
      meta: {
        title: '居住证业务',
      }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/demo/form.vue'),
      meta: {
        title: '添加收件地址',
      }
    },
    {
      path: '/addlive',
      name: 'addlive',
      component: () => import('../views/demo/addlive.vue'),
      meta: {
        title: '居住证办理',
      }
    },
    {
      path: '/addcardno',
      name: 'addcardno',
      component: () => import('../views/demo/addcardno.vue'),
      meta: {
        title: '添加车辆',
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/demo/search.vue'),
      meta: {
        title: '寄送与确认收件',
      }
    },
    {
      path: '/paylist',
      name: 'paylist',
      component: () => import('../views/demo/paylist.vue'),
      meta: {
        title: '支付列表',
      }
    },
    {
      path: '/idquery',
      name: 'idquery',
      component: () => import('../views/demo/idquery.vue'),
      meta: {
        title: '身份查询',
      }
    },
    {
      path: '/home1',
      name: 'home1',
      component: () => import('../views/demo/home1.vue'),
      meta: {
        title: '首页1',
        level:1
      }
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('../views/demo/home2.vue'),
      meta: {
        title: '首页2',
        level:1
      }
    },
    {
      path: '/carquery',
      name: 'carquery',
      component: () => import('../views/demo/carquery.vue'),
      meta: {
        title: '车辆违法查询',
      }
    },
    {
      path: '/seachlist',
      name: 'seachlist',
      component: () => import('../views/demo/seachlist.vue'),
      meta: {
        title: '简单直接查询',
      }
    },
    {
      path: '/seachlist1',
      name: 'seachlist1',
      component: () => import('../views/demo/seachlist1.vue'),
      meta: {
        title: '简单直接查询条件',
      }
    },
    {
      path: '/cont',
      name: 'cont',
      component: () => import('../views/demo/cont.vue'),
      meta: {
        title: '内容',
      }
    },
    {
      path: '/cont1',
      name: 'cont1',
      component: () => import('../views/demo/cont1.vue'),
      meta: {
        title: '内容1',
      }
    },
    {
      path: '/editmenu',
      name: 'editmenu',
      component: () => import('../views/demo/editmenu.vue'),
      meta: {
        title: '编辑菜单',
      }
    },
    {
      path: '/cyrysearch',
      name: 't_cyry_demo_h5search',
      component: () => import('../views/h5/t_cyry_demo_h5search.vue'),
      meta: {
        title: '从业人员查询',
      }
    },
    {
      path: '/cyrylist',
      name: 'cyrylist',
      component: () => import('../views/h5/t_cyry_demo_h5list.vue'),
      meta: {
        title: '从业人员列表',
      }
    },
    {
      path: '/cyryform',
      name: 'cyryform',
      component: () => import('../views/h5/t_cyry_demo_h5form.vue'),
      meta: {
        title: '从业人员编辑',
      }
    },
    //徐柯 人员巡逻任务签到
    {
      path: '/h5/xlyw/t_sqjw_xlgjxx_h5search',
      name: 't_sqjw_xlgjxx_h5search',
      component: () => import('../views/h5/xlyw/t_sqjw_xlgjxx_h5search.vue'),
      meta: {
        title: '巡逻签到查询',
      }
    },
    {
      path: '/h5/xlyw/t_sqjw_xlgjxx_h5list',
      name: 't_sqjw_xlgjxx_h5list',
      component: () => import('../views/h5/xlyw/t_sqjw_xlgjxx_h5list.vue'),
      meta: {
        title: '巡逻签到查询',
      }
    },
    {
      path: '/h5/xlyw/t_sqjw_xlgjxx_h5edit',
      name: 't_sqjw_xlgjxx_h5edit',
      component: () => import('../views/h5/xlyw/t_sqjw_xlgjxx_h5edit.vue'),
      meta: {
        title: '巡逻签到',
      }
    }





  ]
})
