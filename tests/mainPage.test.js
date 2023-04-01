import { getByTestId, page } from './helpers'

fixture('Main page')
  .page(`${page('/')}`)

//just simple check that page opens or not
test('Opens main page', async t => {
  await t.expect(getByTestId("filters-container").exists).ok()
  await t.expect(getByTestId("main-container").exists).ok()
})