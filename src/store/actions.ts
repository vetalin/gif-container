import {store} from './index'

const changeSearchQuery = (query: string) => ({
  type: 'changeSearchQuery',
  query
})

const throttleGifsBySearch = () => ({type: 'throttleGifsBySearch'})

export const dispatchChangeSearchQuery = (query: string) => store.dispatch(changeSearchQuery(query))
export const dispatchThrottleGifsBySearch = () => store.dispatch(throttleGifsBySearch())