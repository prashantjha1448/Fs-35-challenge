
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './Routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import {Store} from "./App/Store.jsx"

createRoot(document.getElementById('root')).render(

   <Provider store={Store}>
     <AppRoutes />
   </Provider>

)
