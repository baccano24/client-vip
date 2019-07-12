import Mock from 'Mockjs'
import axios from 'axios'
const base = 'http://localhost:8080/api'
Mock.mock(base + '/home/caigou', 'get', {
    code: 1,
    'data|9': [
        {   
            caigou_sc: '@csentence(15,20)'
        }
    ]
})


export function getCaiGou(){
    return axios.get(base+'/home/caigou').then(res=>Promise.resolve(res.data))
}
