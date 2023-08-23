import axios from 'axios'

const ApiInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-type': 'application/json',
  },
})

export class ApiService {
  static getCharacters = () => {
    return ApiInstance.get('/character')
  }

  static getCharacterById = (id) => {
    return ApiInstance.get(`/character/${id}`)
  }

  static getEpisodes = () => {
    return ApiInstance.get('/episode')
  }

  static getEpisodesByIds = (id) => {
    if (id) {
      return ApiInstance.get(`/episode/${id}`)
    }
  }
}
