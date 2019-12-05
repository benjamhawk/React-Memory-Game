import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { compose, createStore } from 'redux'
import reducers from './redux'
import { Provider } from 'react-redux'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
