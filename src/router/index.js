import Vue from 'vue'
import Router from 'vue-router'
import Base from '../components/Base/index.vue'
// 注册页面
import Register from '../components/admin/Register.vue'
// 登录页面
import Login from '../components/admin/Login.vue'
// 404
import NotFound from '../components/404.vue'
// 后台管理首页----------------------------------------------------------
import Home from '../components/Home/index.vue'
// 信息发布管理----------------------------------------------------------
// 产品信息发布管理
import cpxx from '../components/Xxfb/cpxx/index.vue'
import Fbxx from '../components/Xxfb/cpxx/fbxx.vue'
import Glxx from '../components/Xxfb/cpxx/glxx.vue'
import Xgxx from '../components/Xxfb/cpxx/xgxx.vue'
// 求购信息发布管理
import qgxx from '../components/Xxfb/qgxx/index.vue'
import Fbqg from '../components/Xxfb/qgxx/fbqg.vue'
import Glqg from '../components/Xxfb/qgxx/glqg.vue'
import Glqg2 from '../components/Xxfb/qgxx/glqg2.vue'
import Xgqg from '../components/Xxfb/qgxx/xgqg.vue'
// 招聘信息发布管理
import zpxx from '../components/Xxfb/zpxx/index.vue'
import Fbzp from '../components/Xxfb/zpxx/fbzp.vue'
import Glzp from '../components/Xxfb/zpxx/glzp.vue'
import Xgzp from '../components/Xxfb/zpxx/xgzp.vue'
// 加盟信息发布管理
import jmxx from '../components/Xxfb/jmxx/index.vue'
import Fbjm from '../components/Xxfb/jmxx/fbjm.vue'
import Gljm from '../components/Xxfb/jmxx/gljm.vue'
import Xgjm from '../components/Xxfb/jmxx/xgjm.vue'
// 相册信息发布管理
import xcxx from '../components/Xxfb/xcxx/index.vue'
import Fbxc from '../components/Xxfb/xcxx/fbxc.vue'
import Glxc from '../components/Xxfb/xcxx/glxc.vue'
import Xgxc from '../components/Xxfb/xcxx/xgxc.vue'
// 证书信息发布管理
import zsxx from '../components/Xxfb/zsxx/index.vue'
import Fbzs from '../components/Xxfb/zsxx/fbzs.vue'
import Glzs from '../components/Xxfb/zsxx/glzs.vue'
import Xgzs from '../components/Xxfb/zsxx/xgzs.vue'
// 企业信息发布管理
import qyxx from '../components/Xxfb/qyxx/index.vue'
import Fbqy from '../components/Xxfb/qyxx/fbqy.vue'
import Glqy from '../components/Xxfb/qyxx/glqy.vue'
import Xgqy from '../components/Xxfb/qyxx/xgqy.vue'
// 留言管理------------------------------------------------------------
// 管理公司留言
import company from '../components/Lygl/company/index.vue'
import com_detail from '../components/Lygl/company/com_detail.vue'
import glCompany from '../components/Lygl/company/glCompany.vue'
// 管理产品留言
import product from '../components/Lygl/product/index.vue'
import pro_detail from '../components/Lygl/product/pro_detail.vue'
import glProduct from '../components/Lygl/product/glProduct.vue'
// 商铺管理------------------------------------------------------------
// 商铺模板管理
import muban from '../components/Spgl/muban/index.vue'
// 商铺友情链接
import lianjie from '../components/Spgl/lianjie/index.vue'
// 商铺banner管理
import banner from '../components/Spgl/banner/index.vue'
import glBanner from '../components/Spgl/banner/Banner.vue'
import XgBanner from '../components/Spgl/banner/XgBanner.vue'
import Xjlj from '../components/Spgl/lianjie/xjlj.vue'
import Xglj from '../components/Spgl/lianjie/xglj.vue'
// 会员信息管理--------------------------------------------------------
// 修改会员信息
import xghy from '../components/Hygl/xghy/index.vue'
import Hyjb from '../components/Hygl/xghy/hyjb.vue'
import Hyxx from '../components/Hygl/xghy/hyxx.vue'
import Hylx from '../components/Hygl/xghy/hylx.vue'
// 修改登录密码
import mima from '../components/Hygl/mima/index.vue'
// 管理二级域名
import erji from '../components/Hygl/erji/index.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Base,
      redirect: { path: "/home" },
      children: [
        {
          path: '/home',
          name: '首页',
          component: Home,
          noCache: true,
          // 无法删除
          affix: true

        },
        // 产品信息发布
        {
          path: '/cpxx',
          component: cpxx,
          redirect: { path: "/cpxx/fb" },
          children: [
            {
              path: 'fb',
              name: '产品信息发布',
              component: Fbxx,
              meta: { title: '产品信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '产品信息管理',
              component: Glxx
            },
            {
              path: 'xg/id=:id',
              name: '产品信息修改',
              component: Xgxx,
              props: true
            }
          ]
        },
        {
          path: '/qgxx',
          name: 'qgxx',
          redirect: { path: "/qgxx/fb" },
          component: qgxx,
          children: [
            {
              path: 'fb',
              name: '求购信息发布',
              component: Fbqg,
              meta: { title: '求购信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '求购信息管理',
              component: Glqg
            },
            {
              path: 'xg/id=:id',
              name: '求购信息修改',
              component: Xgqg,
              props: true
            }
          ]
        },
        {
          path: '/zpxx',
          name: 'zpxx',
          component: zpxx,
          redirect: { path: "/zpxx/fb" },
          children: [
            {
              path: 'fb',
              name: '招聘信息发布',
              component: Fbzp,
              meta: { title: '招聘信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '招聘信息管理',
              component: Glzp
            },
            {
              path: 'xg/id=:id',
              name: '招聘信息修改',
              component: Xgzp,
              props: true
            }
          ]
        },
        {
          path: '/jmxx',
          name: 'jmxx',
          component: jmxx,
          redirect: { path: "/jmxx/fb" },
          children: [
            {
              path: 'fb',
              name: '加盟信息发布',
              component: Fbjm,
              meta: { title: '加盟信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '加盟信息管理',
              component: Gljm
            },
            {
              path: 'xg/id=:id',
              name: '加盟信息修改',
              component: Xgjm,
              props: true
            }
          ]
        },
        {
          path: '/xcxx',
          name: 'xcxx',
          component: xcxx,
          redirect: { path: "/xcxx/fb" },
          children: [
            {
              path: 'fb',
              name: '相册信息发布',
              component: Fbxc,
              meta: { title: '相册信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '相册信息管理',
              component: Glxc
            },
            {
              path: 'xg/id=:id',
              name: '相册信息修改',
              component: Xgxc,
              props: true
            }
          ]
        },
        {
          path: '/zsxx',
          component: zsxx,
          redirect: { path: "/zsxx/fb" },
          children: [
            {
              path: 'fb',
              name: '证书信息发布',
              component: Fbzs,
              meta: { title: '证书信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '证书信息管理',
              component: Glzs
            },
            {
              path: 'xg/id=:id',
              name: '证书信息修改',
              component: Xgzs,
              props: true
            }
          ]
        },
        {
          path: '/qyxx',
          component: qyxx,
          redirect: { path: "/qyxx/fb" },
          children: [
            {
              path: 'fb',
              name: '企业信息发布',
              component: Fbqy,
              meta: { title: '企业信息发布', noCache: true },
            },
            {
              path: 'gl',
              name: '企业信息管理',
              component: Glqy
            },
            {
              path: 'xg/id=:id',
              name: '企业信息修改',
              component: Xgqy,
              props: true
            }
          ]
        },
        // 留言管理
        {
          path: '/company',
          name: 'company',
          component: company,
          redirect: { path: "/company/gl" },
          children: [
            {
              path: 'gl',
              name: '公司留言管理',
              component: glCompany,
              meta: { title: '公司留言管理', noCache: true },
            },
            {
              path: 'detail/id=:id',
              name: '公司留言详情',
              component: com_detail,
              props: true
            }
          ]
        },
        {
          path: '/product',
          name: 'product',
          component: product,
          redirect: { path: "/product/gl" },
          children: [
            {
              path: 'gl',
              name: '产品留言管理',
              component: glProduct,
              meta: { title: '产品留言管理', noCache: true },
            },
            {
              path: 'detail/id=:id',
              name: '产品留言详情',
              component: pro_detail,
              props: true
            }
          ]
        },
        // 商铺管理
        {
          path: '/muban',
          name: '商铺模板管理',
          component: muban,
          meta: { title: '商铺模板管理', noCache: true },
        },
        {
          path: '/lianjie',

          component: lianjie,
          redirect: { path: "/lianjie/xjlj" },

          children: [
            {
              path: 'xjlj',
              name: '商铺友情链接',
              component: Xjlj,
              meta: { title: '商铺友情链接', noCache: true },
            }
          ]
        },
        {
          path: '/banner',
          name: 'banner',
          component: banner,
          redirect: { path: "/banner/glBanner" },
          children: [
            {
              path: 'glBanner',
              name: '商铺banner管理',
              component: glBanner,
              meta: { title: '商铺banner管理', noCache: true },
            },
            {
              path: 'id=:id',
              name: '商铺banner修改',
              component: XgBanner,
              props: true
            }
          ]
        },
        // 会员信息管理
        {
          path: '/xghy',
          name: 'xghy',
          component: xghy,
          redirect: { path: "/xghy/jb" },
          children: [
            {
              path: 'jb',
              name: '修改会员基本信息',
              component: Hyjb,
              meta: { title: '修改会员基本信息', noCache: true },
            },
            {
              path: 'xx',
              name: '修改会员详情信息',
              component: Hyxx
            },
            {
              path: 'lianxi',
              name: '修改会员联系方式',
              component: Hylx
            }
          ]
        },
        {
          path: '/mima',
          name: '修改登录密码',
          component: mima,
          meta: { title: '修改登录密码', noCache: true },
        },
        {
          path: '/erji',
          name: '管理二级域名',
          component: erji,
          meta: { title: '管理二级域名', noCache: true },
        }
      ]
    },
    //注册页面
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    //登录页面
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    //404
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ]
})

// 路由守卫(Token不存在则跳转回登录页面)
// router.beforeEach((to,from,next)=>{
//   const isLogin = localStorage.eletoken? true : false;
//   if(to.path=="/login"|| to.path=="/register"){
//     next();
//   }else{
//     isLogin ? next(): next('/login');
//   }
// })

export default router;