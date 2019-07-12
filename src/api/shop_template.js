import Mock from 'Mockjs'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/shop/muban', 'get', {
    
    'data|13': [
        {   
            

        }
    ]
})
