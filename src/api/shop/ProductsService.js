import ShopApi from '../ShopApi'

export default {
  getProducts: ({ sort: { page = 1, perPage = 10 } = {} } = {}) =>
    ShopApi.get('/products/', {
      // params: {
      //   offset: (page - 1) * perPage,
      //   limit: perPage,
      //   getCount: 1
      // }
    }),
  getProductById: ({ productId }) => ShopApi.get(`/products/${productId}`)
  // batchGetProductById: ({ ids }) =>
  //   ShopApi.get(`/products:batchGet`, {
  //     params: {
  //       ids
  //     },
  //     paramsSerializer: ({ ids }) => ids.map(id => `ids=${id}`).join('&')
  //   })
}
