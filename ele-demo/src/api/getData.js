import axios from 'axios'

const http = axios.create({
    baseURL: 'https://elm.cangdu.org',
    timeout: 10000
})

export const msiteFoodTypes = (geohash) => {
   return new Promise((resolve, reject) => {
    http.get('/v2/index_entry', {
         geohash,
         'flags[]': 'F'
    }).then(res =>resolve(res.data)) 
   })
}
export const searchPlace = (cityid, address) => new Promise((resolve, reject)=>{
    const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${address}`
    http.get(url)
        .then(res => resolve(res.data))
})
export const currentcity = (cityid) => new Promise((resolve, reject)=>{
    const url = `/v1/cities/${cityid}`
    http.get(url)
        .then(res => {
            resolve(res)
        })
})
//  不是所有的浏览器都支持fetch 兼容性问题、 api比较原始
export  const cityGuess = () =>new Promise((resolve, reject)=> {
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
export const hotCity = () => new Promise((resolve, reject)=>{
    fetch('https://elm.cangdu.org/v1/cities?type=hot')
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
export const getCaptchas = ()=>new Promise((resolve, reject)=>{
    fetch('https://elm.cangdu.org/v1/captchas',{
        method: 'POST',
        body: {},
        headers: {
            "Accept": 'application/json',
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .then(err => reject(err))
})

