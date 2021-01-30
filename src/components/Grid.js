/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* Grid cells are not tabbable */

import { useGlobalContext } from '../context'

export default function Grid({ color }) {
  const { name, hex } = color
  const { selectedColorFormat } = useGlobalContext()

  const copyHandler = () => {
    navigator.clipboard.writeText(color[selectedColorFormat.name])
  }

  return (
    <div className="single-grid-cell" style={{ backgroundColor: hex }} onClick={copyHandler}>
      <div className="copy-btn" role="button" />
      <p className="color-name">{name}</p>
    </div>
  )
}
