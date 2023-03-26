import axios from 'axios'

const API_URL = 'https://fakestoreapi.com' // normally it will be in .env file

export function fetchProducts() {
  return axios.get(`${API_URL}/products`)
}

export function fetchCategories() {
  return axios.get(`${API_URL}/products/categories`)
}