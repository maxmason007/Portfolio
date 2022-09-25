import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'




function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const TRACKING_ID = "UA-239487893-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App





