import React from 'react'
import { useGlobalContext } from '../context'

export default function Header() {
  const {
    isSoundOn,
    setIsSoundOn,
    hasShownSubmenu,
    setHasShownSubmenu,
    selectedColorFormat,
    submenuItems,
    setSelectedColorFormat,
  } = useGlobalContext()

  const selectColorFormat = (item) => {
    setSelectedColorFormat(item)
    setHasShownSubmenu(false)
  }

  return (
    <>
      <nav className="top-nav">
        <ul>
          <li />
          <li className="copy-bar">
            <button
              className="format-btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setHasShownSubmenu((prevState) => !prevState)}
            >
              copy format: {selectedColorFormat}
              {hasShownSubmenu ? (
                <span aria-hidden="true" className="triangle">
                  &#x025B4;
                </span>
              ) : (
                <span aria-hidden="true" className="triangle">
                  &#x025BE;
                </span>
              )}
            </button>
            <ul className={`submenu ${hasShownSubmenu && 'submenu-show'}`}>
              {submenuItems.map((item) => (
                <li key={item}>
                  <button
                    className="format-btn"
                    type="button"
                    onClick={() => selectColorFormat(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li className="sound-btn">
            <button type="button" onClick={() => setIsSoundOn((prevState) => !prevState)}>
              sound {isSoundOn ? 'on' : 'off'}{' '}
              <span aria-hidden="true">{isSoundOn ? '🔊' : '🔇'}</span>
            </button>
          </li>
        </ul>
      </nav>
      <p style={{ backgroundColor: 'yellow' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, earum? Doloribus
        consequuntur eaque earum cum expedita numquam laborum sint. Omnis porro incidunt dolorum
        nostrum doloremque iure ullam quae a soluta, accusamus debitis quod mollitia corporis!
        Aperiam repudiandae quasi modi quisquam assumenda, sed hic minima nisi. Magnam vero
        doloribus eos quasi illo placeat ut error, recusandae aperiam adipisci quibusdam a
        voluptatem magni est blanditiis autem delectus quo ratione optio dolorum. Id, dolor a ad
        dignissimos autem ipsam officiis sed inventore, odit doloribus officia labore consequatur
        veritatis deserunt placeat accusantium. Cupiditate vitae quia, consequatur tenetur quisquam
        natus alias quos voluptatibus quidem nesciunt.
      </p>
    </>
  )
}
