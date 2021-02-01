import React, { useEffect } from 'react'

import '../assets/scss/success.scss'
import { useGlobalContext } from '../context'

const successMessages = ['WILL DO!', 'PASTE ME!', 'COPIED!', "IT'LL ROCK!", 'RIGHT ONE!', 'GOT IT!']

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function Success({ color }) {
  const { hex } = color
  const { selectedColorFormat, showSuccessMsg, setShowSuccessMsg } = useGlobalContext()
  const index = getRandomIndex(0, 6)

  // Display success message for a second
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSuccessMsg(false)
    }, 1500)
    return () => clearTimeout(timeoutId)
  }, [setShowSuccessMsg, showSuccessMsg])

  return (
    <div
      className={`container ${showSuccessMsg && 'show-success-msg'}`}
      style={{ backgroundColor: color && hex }}
    >
      <div className={`success-msg ${showSuccessMsg ? 'animateIn' : 'animateOut'}`}>
        <h1>{showSuccessMsg && successMessages[index]}</h1>
        <div className="color-code">
          <p>{color[selectedColorFormat.name]}</p>
        </div>
      </div>
    </div>
  )
}
