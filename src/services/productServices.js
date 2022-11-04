import axios from 'axios'

const SERVER_URL = 'http://localhost:9001'

export const getAllProducts = () => {
  const url = `${SERVER_URL}/pruductData`
  return axios.get(url)
}
export const getWomen = () => {
  const url = `${SERVER_URL}/women`
  return axios.get(url)
}

export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`
  return axios.get(url)
}

export const putProductData = (product, productId) => {
  const url = `${SERVER_URL}/productData/${productId}`
  return axios.put(url, product)
}

export const getAllUsers = () => {
  const url = `${SERVER_URL}/userData`
  return axios.get(url)
}

// export const getUserData = () => {
//   const url = `${SERVER_URL}/userData/${userId}`
//   return axios.get(url)
// }

export const postUserData = (user) => {
  const url = `${SERVER_URL}/userData`
  return axios.post(url, user)
}

export const getAllSubscribers = () => {
  const url = `${SERVER_URL}/subscribers`
  return axios.get(url)
}

export const postSubscriber = (user) => {
  const url = `${SERVER_URL}/subscribers`
  return axios.post(url, user)
}
