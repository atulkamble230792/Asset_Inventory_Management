import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
import App from './App'

import 'react-app-polyfill/ie11' // Import this line
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
