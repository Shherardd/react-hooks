import React from 'react'
import s from './header.module.scss'
import useDarkMode from './Hooks/useDarkMode'
const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const handleCLick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={s.header}>
            <nav>
                <h1>React Hooks</h1>
                <button className={s.toggle} type="button" onClick={() => handleCLick()}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                {/*<button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'DarkMode' : 'LightMode'}</button>*/}
            </nav>
        </div>
    )
}

export default Header
