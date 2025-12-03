import Card from './Card';

const CardList = ({ items }) => {
  if (!items.length) {
    return <p className="text-center">No hay paises</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {items.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CardList;
