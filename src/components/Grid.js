export default function Grid({ color }) {
  const { name, hex, hexClean, rgb, rgba } = color
  console.log(rgba)
  return (
    <div className="single-grid-cell" style={{ backgroundColor: hex }}>
      <div className="copy-btn" />
      <p className="color-name">{name}</p>
    </div>
  )
}
