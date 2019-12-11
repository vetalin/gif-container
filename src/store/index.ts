import { createStore } from 'redux'
import { reducer } from 'store/reducers'
import { registerSubscribes } from 'store/subscribes'

export const store = createStore(reducer)

registerSubscribes()
