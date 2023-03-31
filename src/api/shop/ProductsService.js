import ShopApi from '../ShopApi'
import qs from 'qs';

export default {
  getProducts: (
    // {
    //   sort: {
    //     page = 1,
    //     perPage = 10
    //   } = {}
    // } = {}
    sort = 'asc',
    { colors, priceMin, priceMax, q } = {}
  ) => {
    console.log('colors', colors)
    return ShopApi.get('/products/', {
      // params: {
      //   offset: (page - 1) * perPage,
      //   limit: perPage,
      //   getCount: 1
      // }
      params: {
        // color: colors.join(','),
        color: colors,
        priceMin: priceMin,
        yourparam: 'qwe',
        something: undefined
      },
    })
  },
  getProductById: ({ productId }) => ShopApi.get(`/products/${productId}`)
  // batchGetProductById: ({ ids }) =>
  //   ShopApi.get(`/products:batchGet`, {
  //     params: {
  //       ids
  //     },
  //     paramsSerializer: ({ ids }) => ids.map(id => `ids=${id}`).join('&')
  //   })
}
