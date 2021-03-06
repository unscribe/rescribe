import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import dotenv from 'dotenv'
import "./style/style.sass"

dotenv.config()

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
