import React, { useState, useContext } from 'react'
import s from './header.module.scss'
import ThemeContext from '../context/themeContext'
const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
    const color = useContext(ThemeContext)
    const handleCLick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={s.header}>
            <nav>
                <h1 style={{color}}>React Hooks</h1>
                <button type="button" onClick={() => handleCLick()}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
                {/*<button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'DarkMode' : 'LightMode'}</button>*/}
            </nav>
        </div>
    )
}

export default Header
