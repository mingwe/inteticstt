export const filterWithCategoryAndPrice = (state) => {
  const newState = {...state}
  const categories = newState.filters.categories
  const priceMin = newState.filters.price.min ?? -Infinity
  const priceMax = newState.filters.price.max ?? +Infinity

  const filteredByCategories = newState.products.filter(i => !categories.length || categories.includes(i.category))
  const filteredByPrice = filteredByCategories.filter(i => i.price >= priceMin && i.price <= priceMax)

  return filteredByPrice
}