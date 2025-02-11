import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Header from './component/header.jsx'
import Test from './component/test.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Header />
    <App />
    {/* <Test/> */}
  </StrictMode>,

)
