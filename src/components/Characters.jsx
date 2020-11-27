import React, { useState, useEffect } from 'react'
import s from './characters.module.scss'
const Characters = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response =>response.json())
        .then(data => setCharacters(data.results))
        return () => {
            
        }
    }, [])

    return (
        <div className={`${s.container} ${s.dark}`}>
            <div className={s.characters}>
                {characters.map(char => (
                <div className={s.card}>
                    <h3>{char.name}</h3>
                    <div className={s.img}>
                        <img src={char.image} alt=""/>
                        <div>
                        <ul>
                            <li>Status: {char.status}</li>
                            <li>Specie: {char.species}</li>
                            <li>Gender: {char.gender}</li>
                        </ul>
                        </div>
                    </div>
                    <ul>
                <li>Status: {char.status}</li>
                <li>Specie: {char.species}</li>
                <li>Gender: {char.gender}</li>
                    </ul>
                </div>
                ))}



            </div>
        </div>
    )
}

export default Characters
