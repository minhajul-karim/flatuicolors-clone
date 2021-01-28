import { useGlobalContext } from './context'
import Header from './components/Header'
import Palettes from './components/Palettes'

function App() {
  const { setHasShownSubmenu } = useGlobalContext()

  return (
    /* This <div> element receives click event and closes the submenu 
    if the target element does not contain format-btn class
    */
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={(event) => {
        if (!event.target.classList.contains('format-btn')) setHasShownSubmenu(false)
      }}
    >
      <Header />
      <Palettes />
    </div>
  )
}

export default App
