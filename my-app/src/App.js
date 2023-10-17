import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import LayOut from './pages/LayOut'

export default function App() {
  return (
    <BrowserRouter>
      <LayOut />
    </BrowserRouter>
  )
}
