import Mock from 'Mockjs'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/qgxx/table', 'get', {

  'data|1000': [
    {
      'com_id': '@natural(4)',//id
      'ptname': '@ctitle(15)',//信息标题
      'time': '@datetime()',//递交时间
      'validity': '@date("yyyy-MM-dd")',//有效期限
      'resend': '重发',//求购重发
      'com_name': '@ctitle',//标题
      'contact_name': '@cname',//人名
      'address': '@county(true)',//城市地址
      'e_mail': '@email()',//e-mail
      'fax': '@natural()'//传真
    }
  ]
})

