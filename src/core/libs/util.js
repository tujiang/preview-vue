import axios from 'axios'
let util = {}
util.ajax = axios.create({
  // baseURL:' ',
})
util.isWechat = () => {
  let ua = navigator.userAgent.toLowerCase() || ''
  return ua.indexOf('micromessenger') !== -1
}
export default util
