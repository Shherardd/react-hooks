import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react'
import s from './characters.module.scss'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}
const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response =>response.json())
        .then(data => setCharacters(data.results))
        return () => {
            
        }
    }, [])

    const handleClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }

    //const filteredUsers = characters.filter(user => {
    //    return user.name.toLowerCase().includes(search.toLowerCase())
    //})

    const filteredUsers = useMemo(() => 
        characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase())
        })
    ,[characters, search])
    return (
        <div className={`${s.container} ${s.dark}`}>
            <input type="text" value={search} ref={searchInput} onChange={handleSearch}/>
            <div className={s.characters}>
                
                    {favorites.favorites.map( fav => (
                        <li key={fav.id}>{fav.name}</li>
                    ))}
                {filteredUsers.map(char => (
                <div className={s.card} key={char.id}>
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
                        <li><button onClick={() => handleClick(char)}>Agregar a favoritos</button></li>
                    </ul>
                </div>
                ))}



            </div>
        </div>
    )
}

export default Characters
