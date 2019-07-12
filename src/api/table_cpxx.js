import Mock from 'Mockjs'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/cpxx/table', 'get', {

  'data|1000': [
    {
      'com_id':'@natural(1, 100)',//id
      'ptname': '@ctitle(15)',//信息标题
      'price': '￥@natural(50, 100)',//产品报价
      'resend': '重发',//求购重发,
      'time': '@date("yyyy-MM-dd")',//证书有效期
      'category':'其他证书'//证书类别
    }
  ]
})

