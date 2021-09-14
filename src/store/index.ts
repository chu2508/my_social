import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import createSagaMiddleware  from 'redux-saga'
import rootReducer from './reducer'
import {helloSaga} from './sagas'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose


const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default function configStore () {
  const store = createStore(rootReducer, enhancer)
  sagaMiddleware.run(helloSaga)
  return store
}