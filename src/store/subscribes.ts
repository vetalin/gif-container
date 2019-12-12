import {store} from 'store/index'
import {dispatchThrottleGifsBySearch} from 'store/actions'

export const registerSubscribes = () => {
  return store.subscribe(async () => {
    const {query, foundGifs} = await store.getState()
    if (query?.length > 2) {
      dispatchThrottleGifsBySearch()
    }
  })
}