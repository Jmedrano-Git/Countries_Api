import { useEffect } from 'react';
import { useCharactersStore } from '../store/store';
import CardList from '../components/CardList';

const Entities = () => {
  const characters = useCharactersStore((state) => state.characters);
  const isLoading = useCharactersStore((state) => state.isLoading);
  const error = useCharactersStore((state) => state.error);
  const fetchCharacters = useCharactersStore((state) => state.fetchCharacters);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]); 

  return (
    <div className="container">
      <h1 className="h3 mb-4">Todos los paises</h1>

      {isLoading && <p>Cargando paises...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!isLoading && !error && <CardList items={characters} />}
    </div>
  );
};

export default Entities;
