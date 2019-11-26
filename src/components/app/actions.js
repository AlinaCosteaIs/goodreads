import { FETCH_BOOK_SUCCESS, FETCH_BOOK_FAILED, FETCH_BOOK_STARTED } from './types'

const initialState = {
  data: null,
  loading: false,
  error: null
}
export const fetchBooksSuccess = books => ({
  type: FETCH_BOOK_SUCCESS,
  payload: {
    books,
  }
  
})
export const fetchBookStarted = loading => ({
  type: FETCH_BOOK_STARTED,
  payload: {
    loading
  }
  
})
export const fetchBookFailed = loading => ({
  type: FETCH_BOOK_FAILED,
  payload: {
    loading
  }
  
})
/*
  // {
  //   type : FETCH_BOOK_FAILED,
  //   payload:{ loading}
  // } */
//rename in fetch success
//add 2 new actions: fetchBookStarted  fetchBookFailed
//use redux tool
//add loading state: true/false ..show in booklist
export default url => dispatch => {
  dispatch(fetchBookStarted(true))
  fetch(url)
    .then(res => res.json())
    .then(books => {
      dispatch(fetchBooksSuccess(books))
    })
    .catch (err => {
      dispatch(fetchBookFailed(false))
    })
}