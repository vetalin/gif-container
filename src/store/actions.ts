import {store} from './index'
import { getGifsFromRemoveResults } from 'store/presenter'
import { fetchGif } from 'requests/getRandomGif'

const changeSearchQuery = (query: string) => ({
  type: 'changeSearchQuery',
  query
})

const throttleGifsBySearch = (payload: any[]) => ({type: 'throttleGifsBySearch', payload})

export const dispatchChangeSearchQuery = (query: string) => store.dispatch(changeSearchQuery(query))
export const thunkThrottleGifsBySearch = (): any => async (dispatch: any, getState: any) => {
  const results = getGifsFromRemoveResults(await fetchGif(getState().query))
  return dispatch(throttleGifsBySearch(results))
}
export const dispatchThrottleGifsBySearch = () => store.dispatch(thunkThrottleGifsBySearch())