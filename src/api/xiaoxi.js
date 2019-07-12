import Mock from 'Mockjs'
import axios from 'axios'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/home/xiaoxi', 'post', {
    code: 1,
    'data|1-1': [
        {   
            showInfo: '@csentence(10,15)'
        }
    ]
})


export function getXiaoXi(){
    return axios.post(base+'/home/xiaoxi').then(res=>Promise.resolve(res.data))
}
