import _axios from 'axios'
import { trimEnd } from 'lodash'

function createBaseApi() {

  const BaseApi = _axios.create({
    paramsSerializer: {
      encode: (q) => ((typeof q === 'string') ? q.replace('[]', '') : q) //to remove array brackets cuz documented `arrayFormat` doesnt work correct on current version
    },
  })

  //here we can do some interceptors for future auth feature

  return BaseApi
}

const ShopApi = createBaseApi()

// ShopApi.defaults.baseURL = `https://demo-server-forked.vercel.app/api`
ShopApi.defaults.baseURL = `${trimEnd(process.env.NEXT_PUBLIC_API_URL, '/')}`

export default ShopApi
