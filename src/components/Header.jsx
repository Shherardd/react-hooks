import React, { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleCLick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className="Header">
            <h1>Hooks</h1>
    <button type="button" onClick={() => handleCLick()}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
    <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
        </div>
    )
}

export default Header
