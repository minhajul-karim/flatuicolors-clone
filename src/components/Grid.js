/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* Grid cells are not tabbable */

import { useGlobalContext } from '../context'
import copySound from '../assets/sounds/copy_sound.m4a'

export default function Grid({ color }) {
  const { name, hex } = color
  const { selectedColorFormat, setColor, setShowSuccessMsg, isSoundOn } = useGlobalContext()

  // Copy code to clipboard
  const copyHandler = () => {
    navigator.clipboard.writeText(color[selectedColorFormat.name])
    setColor(color)
    setShowSuccessMsg(true)
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
