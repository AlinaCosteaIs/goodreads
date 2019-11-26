import { FETCH_BOOK_SUCCESS, FETCH_BOOK_STARTED, FETCH_BOOK_FAILED } from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_BOOK_SUCCESS:
      return {
        books: action.payload.books,
        loading: false
      }
     case FETCH_BOOK_FAILED: 
     return {
        books : [],
        loading: false
     }
     case FETCH_BOOK_STARTED: 
     return {
        books:[],
        loading: true
     }
    default:
      return state
  }
}