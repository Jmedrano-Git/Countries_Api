import { useEffect } from 'react'
import { useCharactersStore } from '../store/store'
import CardList from '../components/CardList'

const Home = () => {
  const { characters, isLoading, error, fetchCharacters } = useCharactersStore()

  useEffect(() => {
    if (characters.length === 0) {
      fetchCharacters()
    }
  }, [characters.length, fetchCharacters])

  const firstEight = characters.slice(0, 8)

  return (
    <div className="container">
      <section className="text-center py-5">
        <h1 className="display-4 fw-bold mb-3">Countries All</h1>
        <p className="lead text-muted">
        React + Vite + Zustand con Api
        </p>
        <img
          src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1034A/production/_101687366__91884749_gettyimages-119505258.jpg.webp"
          alt="Dragon Ball"
          className="img-fluid rounded shadow mt-3"
          style={{ maxHeight: '280px', objectFit: 'cover' }}
        />
      </section>

      <section className="pb-5">
        <h2 className="h4 mb-3">Algunos Paises </h2>

        {isLoading && <p>Cargando paises...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!isLoading && !error && <CardList items={firstEight} />}
      </section>
    </div>
  )
}

export default Home
