import { FETCH_BOOKS } from './types'

export const fetchBooksAction = books => ({
  type: FETCH_BOOKS,
  payload: {
    books,
  },
})

export default url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(books => {
      dispatch(fetchBooksAction(books))
    })
}