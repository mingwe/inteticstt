import { getByTestId, page } from './helpers'

fixture('About page')
  .page(`${page('/about')}`)

//just simple check that page opens or not
test('Opens about page', async t => {
  await t.expect(getByTestId("description").exists).ok()
  await t.expect(getByTestId("hello-text").exists).ok()
  await t.expect(getByTestId("github-link").exists).ok()
})