import { Reducer } from 'redux'
import { defaultState } from 'store/state'

export const reducer: Reducer = async (state = defaultState, action) => {
  switch (action.type) {
    case 'changeSearchQuery':
      return {
        ...state,
        query: action.query
      }
    case 'throttleGifsBySearch':
      return {
        ...state,
        foundGifs: action.payload
      }
    default:
      return state
  }
}