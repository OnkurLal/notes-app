import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import LoginButton from './components/LoginButton'


function App() {

  return (
    <>
      <Header />
      <LoginButton />
      <Content />
      <Footer />
    </>
  )
}

export default App
