import ShopApi from '../ShopApi'

export default {
  getColorsList: () =>
    ShopApi.get('/colors/')
}
