import axios from 'axios'
export const runCallback = (callbacl) => {
  return callbacl('abc')
}

export const  createObject = (classItem) => {
  new classItem;
}

export const getData = () => {
  return axios.get('/api').then(res => res.data)
}