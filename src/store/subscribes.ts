import {store} from 'store/index'
import {dispatchThrottleGifsBySearch} from 'store/actions'

export const registerSubscribes = () => {
  store.subscribe(() => {
    const {query} = store.getState()
    if (query?.length > 2) {
      dispatchThrottleGifsBySearch()
    }
  })
}