import '../assets/scss/success.scss'
import { useGlobalContext } from '../context'

export default function Success({ color }) {
  const { hex } = color
  const { selectedColorFormat } = useGlobalContext()
  console.log(color)
  return (
    <div className="container" style={{ backgroundColor: hex }}>
      <div className="success-msg">
        <h1>WILL DO!</h1>
        <div className="color-code">
          <p>{color[selectedColorFormat.name]}</p>
        </div>
      </div>
    </div>
  )
}
