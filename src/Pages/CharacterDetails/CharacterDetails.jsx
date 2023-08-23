/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import './index.scss'
import arrowBack from '../../assets/arrowBack.svg'
import { ApiService } from '../../api/ApiService'

const CharacterDetails = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    const [episodes, setEpisodes] = useState([])


    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    async function getCharacter() {
        try {
            setLoading(true)
            const { data } = await ApiService.getCharacterById(id)
            setCharacter(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    async function getEpisodesByCharacter(ids) {
        try {
            setLoading(true)
            if (ids) {
                const { data } = await ApiService.getEpisodesByIds(ids)
                setEpisodes(data)
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }


    async function getEpisodes() {
        const ids = character.episode?.slice(0, 4).map((episode) => {
            const urlSplit = episode.split('/')
            return urlSplit[urlSplit.length - 1]
        })
        const idsString = ids?.join(',')
        getEpisodesByCharacter(idsString)
    }







    useEffect(() => {
        getCharacter()
    }, [])

    useEffect(() => {
        getEpisodes()
    }, [character])


    if (loading) return <Loading />

    if (error) return <p>Error :{error.message}</p>






    return (
        <section className='CharacterDetail'>

            <div className='CharacterDetail__container'>
                <Link to='/' className='arrowLeft'><img src={arrowBack} alt="" />VOLTAR</Link>
                <div className='CharacterDetail__image'>
                    <img src={character.image} alt={character.name} />
                </div>
                <div className='CharacterDetail__details'>
                    <div className="CharacterDetail__informations">
                        <h2>Informações</h2>
                        <div className="CharacterDetail__character-info">
                            <div className="row">
                                <h1>Gênero</h1>
                                <p>{character.gender}</p>
                            </div>
                            <div className="row">
                                <h1>Status</h1>
                                <p>{character.status}</p>
                            </div>
                            <div className="row">
                                <h1>Espécie</h1>
                                <p>{character.species}</p>
                            </div>
                            <div className="row">
                                <h1>Origem</h1>
                                <p>{character.origin?.name}</p>
                            </div>
                            <div className="row">
                                <h1>Tipo</h1>
                                <p>{character?.type ? character.type : 'Desconhecido'}</p>
                            </div>
                            <div className="row">
                                <h1>Última localização</h1>
                                <p>{character.location?.name}</p>
                            </div>

                        </div>
                    </div>
                    <div className="CharacterDetail__episodes">
                        <h2>Episódios</h2>
                        <div className="CharacterDetail__episodes-list">
                            {Array.isArray(episodes) ? episodes.map((episode) => (
                                <div className="episode" key={episode.id}>
                                    <h1>{episode.episode}</h1>
                                    <p>{episode.name}</p>
                                </div>
                            )) : <div className="episode">
                                <h1>{episodes.episode}</h1>
                                <p>{episodes.name}</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default CharacterDetails
