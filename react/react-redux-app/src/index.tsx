import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configure.store'
import App from './components/app.component'
import * as serviceWorker from './serviceWorker';

import './styles.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
