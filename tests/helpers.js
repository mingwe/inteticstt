import { ClientFunction, Selector } from 'testcafe'

export const page = (path = '') =>
  `${process.env.TESTCAFE_BASE_URL || 'localhost:3000'}${path}`
// ShopApi.defaults.baseURL = `https://demo-server-forked.vercel.app/api`
export const getPageURL = ClientFunction(() => window.location.href)

export const getByTestId = (testid) => Selector(`[data-testid="${testid}"]`)