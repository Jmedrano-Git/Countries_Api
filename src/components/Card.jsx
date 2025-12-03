const Card = ({ character }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={character.image}
          className="card-img-top"
          style={{
            height: '260px',
            objectFit: 'contain',
            backgroundColor: '#fff',
            padding: '10px',
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text text-muted mb-1">{character.capital}</p>
          <p className="card-text">
            <strong>Name:</strong> {character.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
