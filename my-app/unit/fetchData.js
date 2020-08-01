import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then((response) => {
    fn(response.data)
  })
}

// 有的时候fetch Data 不接受回调，只是单纯的promise
export const fetchNewData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json');
}
