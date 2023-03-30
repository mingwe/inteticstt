import axios from 'axios'

const API_URL = process.env.REACT_APP_API_BASE_URL
export function fetchProducts() {
  return axios.get(`${API_URL}/products`)
}

export function fetchCategories() {
  return axios.get(`${API_URL}/products/categories`)
}