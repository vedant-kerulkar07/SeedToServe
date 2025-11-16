import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>

  )
}

export default App
