import * as types from '../actions/action-types';

const initialState = {
  list: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA_PENDING:
      console.log('data pending')
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case types.FETCH_DATA_FULFILLED:
      console.log('data fulfilled')
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case types.FETCH_DATA_REJECTED:
      console.log('data rejected')
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      console.log('default reducer')
      return state
  }
}
