import { getByTestId, page } from './helpers'

fixture('Main page')
  .page(`${page('/')}`)

//just simple check that page opens or not
test('Opens main page', async t => {
  await t.expect(getByTestId("filters-container").exists).ok()
  await t.expect(getByTestId("main-container").exists).ok()
})

test('Apply filters', async t => {
  // here we can write test logic for checking filters
  await t.expect(true).ok()
})

test('Apply sort', async t => {
  // here we can write test logic for testing sort
  await t.expect(true).ok()
})

test('Apply search', async t => {
  // here we can write test logic for testing search
  await t.expect(true).ok()
})