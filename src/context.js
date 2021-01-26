import React, { createContext, useState, useContext, useEffect } from 'react'

const AppContext = createContext()
const colorFormats = ['HEX (#AA1923)', 'HEX (AA1923)', 'RGB - (1,2,3)', 'RGBA - (1,2,3,0.4)']

export const AppProvider = ({ children }) => {
  const [selectedColorFormat, setSelectedColorFormat] = useState(colorFormats[0])
  const [submenuItems, setSubmenuItems] = useState(
    colorFormats.filter((format) => format !== selectedColorFormat)
  )

  useEffect(() => {
    setSubmenuItems(colorFormats.filter((format) => format !== selectedColorFormat))
  }, [selectedColorFormat])

  return (
    <AppContext.Provider value={{ selectedColorFormat, submenuItems, setSelectedColorFormat }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
