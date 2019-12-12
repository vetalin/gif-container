import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from 'store/reducers'

export const store = createStore(reducer, applyMiddleware(thunk))
