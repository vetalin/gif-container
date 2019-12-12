import {store} from 'store/index'
import {dispatchThrottleGifsBySearch} from 'store/actions'

export const registerSubscribes = () => {
  let oldQuery = ''
  return store.subscribe(() => {
    const {query} = store.getState()
    if (query?.length > 2 && oldQuery !== query) {
      dispatchThrottleGifsBySearch()
      oldQuery = query
    }
  })
}