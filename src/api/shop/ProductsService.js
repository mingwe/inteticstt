import ShopApi from '../ShopApi'
import { DESC, POPULAR } from '../../helpers/sort'

export default {
  getProducts: (
    { type },
    { colors, price, search } = {}
  ) => {
    const getSortField = type => (type === POPULAR ? 'rating' : 'price')
    const getSortOrder = type => (type === POPULAR ? DESC : type)

    return ShopApi.get('/products/', {
      params: {
        color: colors,
        price_gte: price.min,
        price_lte: price.max,
        q: search || null,
        _sort: getSortField(type),
        _order: getSortOrder(type)
      },
    })
  },
  getProductById: ({ productId }) => ShopApi.get(`/products/${productId}`) // for future single product page
}
