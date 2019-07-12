import Mock from 'Mockjs'
import axios from 'axios'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/home/weituo', 'get', {
    code: 1,
    'data|10': [
        {   
            'date': '@date(MM-dd)',
            'ctitle': '@ctitle'
        }
    ]
})


export function getWeiTuo(){
    return axios.get(base+'/home/weituo').then(res=>Promise.resolve(res.data))
}
