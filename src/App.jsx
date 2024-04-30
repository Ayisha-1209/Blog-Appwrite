import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-red-700'>
      <h1 className='text-3xl text-gray-950'>Hello Guys!!!</h1>
      <div className='w-full block text-center'>
        <Header />
        <main>
        TODO:{/*  <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null

}

export default App
