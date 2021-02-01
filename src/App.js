/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import Header from './components/Header'
import Palettes from './components/Palettes'
import Success from './components/Success'
import { useGlobalContext } from './context'

function App() {
  const { setHasShownSubmenu, color } = useGlobalContext()

  return (
    /* This <div> element receives click event and closes the submenu 
    if the target element does not contain format-btn class
    */
    <div
      onClick={(event) => {
        if (!event.target.classList.contains('format-btn')) setHasShownSubmenu(false)
      }}
    >
      <Success color={color} />
      <Header />
      <Palettes />
    </div>
  )
}

export default App
