import Grid from './Grid'
import { colors } from '../colors'
import '../assets/scss/palettes.scss'

export default function Palettes() {
  return (
    <div className="palette-container">
      {colors.map((color) => (
        <Grid key={color.id} color={color} />
      ))}
    </div>
  )
}
