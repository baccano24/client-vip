import Mock from 'Mockjs'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/qgxx/fabu', 'get', {
    
    'data|1': [
        {   
            'com_name':'@ctitle',//标题
            'contact_name':'@cname',//人名
            'address':'@county(true)',//城市地址
            'e_mail':'@email()',//e-mail
            'fax':'@natural()'//传真

        }
    ]
})

