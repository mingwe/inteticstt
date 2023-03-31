import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
export function fetchProducts() {
  // return axios.get(`${API_URL}/products`)
  return axios.get(`${API_URL}/products`)
}
export function fetchColors() {
  return axios.get(`${API_URL}/colors`)
}

export function fetchCategories() {
  return axios.get(`${API_URL}/products/categories`)
}