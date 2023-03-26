export const ASC = 'ASC'
export const DESC = 'DESC'
export const POPULAR = 'POPULAR'

export const sortByType = (type, arr) => {
  switch (type) {
    case ASC:
      arr.sort((a, b) => (a.price > b.price ? 1 : -1))
      break
    case DESC:
      arr.sort((a, b) => (a.price < b.price ? 1 : -1))
      break
    case POPULAR:
      arr.sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1))
      break
    default:
      break
  }
  return arr
}