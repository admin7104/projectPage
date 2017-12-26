import App from '../App'


const test = r => require.ensure([], () => r(require('../page/test')), 'test')

// 智慧财神
const link = r => require.ensure([], () => r(require('../page/link/link')), 'link')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const reg = r => require.ensure([], () => r(require('../page/login/reg')), 'reg')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const invest = r => require.ensure([], () => r(require('../page/invest/invest')), 'invest')
const invest2 = r => require.ensure([], () => r(require('../page/invest/invest2')), 'invest2')
const invest_detail = r => require.ensure([], () => r(require('../page/invest/children/invest_detail')), 'invest_detail')
const account = r => require.ensure([], () => r(require('../page/account/account')), 'account')
const account_infos = r => require.ensure([], () => r(require('../page/account/children/account_infos')), 'account_infos')
const recharge = r => require.ensure([], () => r(require('../page/recharge_withdraw/recharge')), 'recharge')
const withdraw = r => require.ensure([], () => r(require('../page/recharge_withdraw/withdraw')), 'withdraw')
const my_bank = r => require.ensure([], () => r(require('../page/bank/my_bank')), 'my_bank')
const bind_bank = r => require.ensure([], () => r(require('../page/bank/bind_bank')), 'bind_bank')
const bank_list = r => require.ensure([], () => r(require('../page/bank/bank_list')), 'bank_list')
const forget_password = r => require.ensure([], () => r(require('../page/password/forget_password')), 'forget_password')
const trader_password = r => require.ensure([], () => r(require('../page/password/trader_password')), 'trader_password')
const myinvest_recode = r => require.ensure([], () => r(require('../page/recode/myinvest_recode')), 'myinvest_recode')
const capital_recode = r => require.ensure([], () => r(require('../page/recode/capital_recode')), 'capital_recode')
const activities = r => require.ensure([], () => r(require('../page/activities/activities')), 'activities')
const coupon_1 = r => require.ensure([], () => r(require('../page/coupon/coupon_1')), 'coupon_1')
const coupon_2 = r => require.ensure([], () => r(require('../page/coupon/coupon_2')), 'coupon_2')
const coupon_3 = r => require.ensure([], () => r(require('../page/coupon/coupon_3')), 'coupon_3')

const agreement = r => require.ensure([], () => r(require('../page/agreement/agreement')), 'agreement')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue

        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
      //测试计算
      {
        path: '/test',
        component: test,
      },
        //投资页
        {
          path: '/home',
          component: home,
        },
        //投资页
        {
            path: '/invest',
            component: invest,
        },
        {
          path: '/invest2',
          component: invest2,
        },
        {
          path: '/invest_detail',
          component: invest_detail,
        },
        //个人信息页
        {
            path: '/account',
            component: account,
        },
        {
          path: '/account_infos',
          component: account_infos,
        },
        //注册登录
        {
          path: '/reg',
          component: reg,
        },
        {
          path: '/login',
          component: login,
        },
        //链接
        {
          path: '/link',
          component: link,
        },
        //充值提现
        {
          path: '/recharge',
          component: recharge,
        },
        {
          path: '/withdraw',
          component: withdraw,
        },
        //银行卡
        {
          path: '/my_bank',
          component: my_bank,
        },
        {
          path: '/bind_bank',
          component: bind_bank,
        },
        {
          path:'/bank_list',
          component: bank_list,
        },
        //密码
        {
          path: '/forget_password',
          component: forget_password,
        },
        {
          path: '/trader_password',
          component: trader_password,
        },
        //记录
        {
          path: '/myinvest_recode',
          component: myinvest_recode,
        },
        {
          path: '/capital_recode',
          component: capital_recode,
        },
      //活动
      {
        path: '/activities',
        component: activities,
      },
      //理财券
      {
        path: '/coupon_1',
        component: coupon_1,
      },
      {
        path: '/coupon_2',
        component: coupon_2,
      },
      {
        path: '/coupon_3',
        component: coupon_3,
      },
      //协议
      {
        path: '/agreement/:id',
        component: agreement
      }
    ]
}]
