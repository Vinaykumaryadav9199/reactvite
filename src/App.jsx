import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Payment from './page/Payment.jsx'
import Paymentstatus  from './page/Paymentstatus.jsx'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import axios from 'axios'

function App() {
  
    return(
      <BrowserRouter>
          <Routes>
            <Route path='/'  element = {<Payment/>}/>
            <Route  path='/paymentstatus/:txnid/:amt/:status'  element= {<Paymentstatus/>}/>
          </Routes>
      </BrowserRouter>
    )

  
}

export default App
