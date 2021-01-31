/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react'

import '../assets/scss/success.scss'
import copySound from '../assets/sounds/copy_sound.m4a'
import { useGlobalContext } from '../context'

const successMessages = ['WILL DO!', 'PASTE ME!', 'COPIED!', "IT'LL ROCK!", 'RIGHT ONE!', 'GOT IT!']

const showRandomMsg = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function Success({ color }) {
  const { hex } = color
  const { selectedColorFormat, isSoundOn } = useGlobalContext()
  const soundTrackRef = useRef(null)
  const index = showRandomMsg(0, 6)

  // Play sound
  useEffect(() => {
    isSoundOn && soundTrackRef.current.play()
  }, [isSoundOn])

  return (
    <div className="container" style={{ backgroundColor: hex }}>
      <div className="success-msg">
        <h1>{successMessages[index]}</h1>
        <div className="color-code">
          <p>{color[selectedColorFormat.name]}</p>
        </div>
      </div>
      <audio ref={soundTrackRef} src={copySound} />
    </div>
  )
}
