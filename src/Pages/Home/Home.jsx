import { useEffect, useState } from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import Loading from '../../Components/Loading/Loading';
import { ApiService } from '../../api/ApiService';
import './index.scss'

const Home = () => {
    const [characters, setCharacters] = useState([])

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    async function getCharacters() {
        try {
            setLoading(true)
            const { data } = await ApiService.getCharacters()
            setCharacters(data.results)
        } catch (error) {
            setError(error)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])



    if (loading) return <Loading />

    if (error) return <p>Error :{error.message}</p>






    return (
        <section className='Home'>

            {characters.map((character) => (

                <CharacterCard key={character.id} character={character} />

            ))}
        </section>
    );
}

export default Home