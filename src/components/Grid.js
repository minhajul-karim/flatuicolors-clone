/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* Grid cells are not tabbable */

import React from 'react'
import { useGlobalContext } from '../context'
import copySound from '../assets/sounds/copy_sound.m4a'

export default function Grid({ color }) {
  const { name, hex } = color
  const { selectedColorFormat, isSoundOn, setColor, setShowSuccessMsg } = useGlobalContext()

  // Copy code to clipboard and play sound
  const copyHandler = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color[selectedColorFormat.name])
    } else {
      console.warn('Copy failed!')
    }
    setColor(color)
    setShowSuccessMsg(true)
    // Scroll to top so that the success msg can spread
    window.scrollTo(0, 0)
    const audio = new Audio(copySound)
    isSoundOn && audio.play()
  }

  return (
    <div className="single-grid-cell" style={{ backgroundColor: hex }} onClick={copyHandler}>
      <div className="copy-btn" role="button" />
      <p className="color-name">{name}</p>
    </div>
  )
}
