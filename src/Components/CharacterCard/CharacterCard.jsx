import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const CharacterCard = ({ character }) => {
    return (
        <div className='CharacterCard'>
            <div className="CharacterCard__image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="CharacterCard__description">
                <h3>{character.name}</h3>
                <p>{character.species}</p>
                <Link className="btn-details" to={`/details/${character.id}`}>Detalhes</Link>


            </div>
        </div>
    )
}

export default CharacterCard