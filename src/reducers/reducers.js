import * as types from '../actions/action-types';

const initialState = {
  list: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_PENDING:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case types.FETCH_DATA_FULFILLED:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case types.FETCH_DATA_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
