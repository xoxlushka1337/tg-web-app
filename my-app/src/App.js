import { useEffect } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Button } from './components/Button/Button'
import { Route, Router, Routes } from 'react-router'
import { Form } from './components/Form/Form'
import { ProductList } from './components/ProductList/ProductList'

const tg = window.Telegram.WebApp

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route index element={<ProductList />} />
        <Route path='/form' element={<Form />} />
      </Routes>

      <Button />
    </div>
  )
}

export default App
