import { Reducer } from 'redux'
import { defaultState } from 'store/state'
import { fetchGif } from 'requests/getRandomGif'
import { getGifsFromRemoveResults } from 'store/presenter'

export const reducer: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeSearchQuery':
      return {
        ...state,
        query: action.query
      }
    case 'throttleGifsBySearch':
      return (async () => {
        const results = getGifsFromRemoveResults(await fetchGif(state.query))
        return {
          ...state,
          foundGifs: results
        }
      })()
    default: return state
  }
}