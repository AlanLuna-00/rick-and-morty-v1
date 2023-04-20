import "./Detail.css";
import { useGetCharacter } from "../../hooks/useGetCharacter";

export default function Detail() {
  
  const character = useGetCharacter();

  return (
    <div className="detail-container">
      {character.name ? 
        <div
        className={`detail-card ${
          character.status === "Alive"
            ? "detail-card-alive"
            : "detail-card-dead"
        }`}
      >
        <img src={character.image} alt={character.name} />
        <div className="detail-card-info">
          <h1>{character.name}</h1>
          <h2>
            {character.species} -{" "}
            {character.status === "unknown"
              ? "Estado de vida desconocido"
              : character.status}
          </h2>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
          <p>Location: {character.location?.name}</p>
        </div>
      </div>
      :
      <div className="loading">
        <div className="sub-loading"></div>
      </div>
      }
    </div>
  );
}
