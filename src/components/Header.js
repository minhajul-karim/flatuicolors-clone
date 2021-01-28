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
        <p className="back-button" />
        <ul>
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
        </ul>
        <button
          className="sound-btn"
          type="button"
          onClick={() => setIsSoundOn((prevState) => !prevState)}
        >
          {isSoundOn ? (
            <span className="sound-text">sound on</span>
          ) : (
            <span className="sound-text">sound off</span>
          )}{' '}
          <span aria-hidden="true">{isSoundOn ? '🔊' : '🔇'}</span>
        </button>
      </nav>
      <div className="test" />
    </>
  )
}
