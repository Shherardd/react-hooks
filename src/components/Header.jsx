import React, { useState } from 'react'
import s from './header.module.scss'
const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleCLick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={s.header}>
            <nav>
                <h1>React Hooks</h1>
                <button type="button" onClick={() => handleCLick()}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
                {/*<button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'DarkMode' : 'LightMode'}</button>*/}
            </nav>
        </div>
    )
}

export default Header
