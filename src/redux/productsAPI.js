import axios from 'axios'

const API_URL = 'https://fakestoreapi.com'
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchProducts() {
  return axios.get(`${API_URL}/products`)
}

export function fetchCategories() {
  return axios.get(`${API_URL}/products/categories`)
}