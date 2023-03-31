/* eslint-disable no-underscore-dangle */
import _axios from 'axios'
import { trimEnd } from 'lodash'
import Qs from 'qs'

// import { clearSession, getSession, setSession } from '@src/store/session'

function createBaseApi() {

  const BaseApi = _axios.create({
    paramsSerializer: {
      encode: (q) => q.replace('[]', '')
    },
  })

  // const refreshAccessToken = async ({ refreshToken }) => {
  //   const resp = await BaseApi.post('/auth:refresh_access_token', {
  //     refresh_token: refreshToken
  //   })
  //
  //   if (resp.errorObject?.message) {
  //     throw new Error(resp.errorObject.message)
  //   }
  //
  //   setSession({ AccessToken: resp.results.access_token, RefreshToken: refreshToken })
  // }

  // BaseApi.interceptors.request.use(
  //   config => {
  //     const session = getSession()
  //     if (session?.AccessToken) {
  //       config.headers = {
  //         Authorization: `Bearer ${session.AccessToken}`
  //       }
  //     }
  //     return config
  //   },
  //   error => Promise.reject(error)
  // )

  // BaseApi.interceptors.response.use(
  //   response => response.data,
  //   async error => {
  //     const originalRequest = error.config
  //     const session = getSession()
  //     const refreshToken = session?.RefreshToken
  //
  //     if (error.response.status === 403) {
  //       if (!originalRequest._retry && refreshToken) {
  //         originalRequest._retry = true
  //         await refreshAccessToken({ refreshToken })
  //         return BaseApi(originalRequest)
  //       }
  //
  //       // If the we tried refreshing the token, but still got 403,
  //       // clear the session and reload the app
  //       clearSession()
  //       window.location.reload()
  //     }
  //
  //     return Promise.reject(error)
  //   }
  // )
  return BaseApi
}

const ShopApi = createBaseApi()

// Needs to end without a slash
// ShopApi.defaults.baseURL = `https://demo-server-forked.vercel.app/api`
ShopApi.defaults.baseURL = `${trimEnd(process.env.NEXT_PUBLIC_API_URL, '/')}`

export default ShopApi
