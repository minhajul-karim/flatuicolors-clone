/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* Grid cells are not tabbable */

import React, { useRef } from 'react'
import { useGlobalContext } from '../context'
import copySound from '../assets/sounds/copy_sound.m4a'

export default function Grid({ color }) {
  const { name, hex } = color
  const { selectedColorFormat, isSoundOn } = useGlobalContext()
  const soundTrackRef = useRef(null)

  // Copy code to clipboard and play sound
  const copyHandler = () => {
    navigator.clipboard.writeText(color[selectedColorFormat.name])
    isSoundOn && soundTrackRef.current.play()
  }

  return (
    <div className="single-grid-cell" style={{ backgroundColor: hex }} onClick={copyHandler}>
      <div className="copy-btn" role="button" />
      <p className="color-name">{name}</p>
      <audio ref={soundTrackRef} src={copySound} />
    </div>
  )
}
