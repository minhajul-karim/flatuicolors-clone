/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import { useGlobalContext } from './context'
import Header from './components/Header'
import Palettes from './components/Palettes'
import Success from './components/Success'

function App() {
  const { setHasShownSubmenu, showSuccessMsg, setShowSuccessMsg, color } = useGlobalContext()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSuccessMsg(false)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [setShowSuccessMsg, showSuccessMsg])

  if (showSuccessMsg) {
    return <Success color={color} />
  }

  return (
    /* This <div> element receives click event and closes the submenu 
    if the target element does not contain format-btn class
    */
    <div
      onClick={(event) => {
        if (!event.target.classList.contains('format-btn')) setHasShownSubmenu(false)
      }}
    >
      <Header />
      <Palettes />
    </div>
  )
}

export default App
