import './index.scss'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Core CSS required for Ionic components to work properly */

/* Basic CSS for apps built with Ionic */

/* Optional CSS utils that can be commented out */

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
