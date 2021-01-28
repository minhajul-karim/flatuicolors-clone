export default function Grid({ color }) {
  const { name, hex, hexClean, rgb, rgba } = color
  return (
    <div className="single-grid-cell" style={{ backgroundColor: hex }}>
      <p className="color-name">{name}</p>
    </div>
  )
}
