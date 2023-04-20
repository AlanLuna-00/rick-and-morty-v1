import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFav } from "../../redux/actions";
import "./Favorites.css";
import { filterCards, orderCards } from "../../redux/actions";
import toast, { Toaster } from 'react-hot-toast';

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleRemoveFav = (id, name) => {
    dispatch(removeFav(id));
    toast.error(`${name} eliminado de favs 💔`);
  };

  const handleFilterCards = (e) => {
    dispatch(filterCards(e.target.value));
    console.log(e.target.value)
  };

  const [aux, setAux] = useState(false)

  const handleOrderCards = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux)
    console.log(aux)
  };


  return (
    <>
      <div className="container-filters">
        <select onChange={handleOrderCards} >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilterCards} >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          <option value="alls">Todos</option>
        </select>
      </div>

      <div className="container-favorites">
        {favorites.map((fav, i) => (
          <div
            key={i}
            className={`card-pj ${fav.status === "Alive"
              ? "alive"
              : fav.status === "Dead"
                ? "dead"
                : ""
              }`}
          >
            <img className="img" src={`${fav.image}`} alt={`${fav.name}`} />
            <h1 className="name">{fav.name}</h1>
            <h2
              className={
                fav.status === "Dead"
                  ? "status_dead"
                  : fav.status === "Alive"
                    ? "status_alive"
                    : "gender"
              }
            >
              {fav.status === "unknown"
                ? "Estado de vida desconocido"
                : fav.status}
            </h2>
            <h2 className="gender">
              {fav.gender}
            </h2>
            <h2 className="gender">
              {fav.species}
            </h2>
            <h2 className="origin">
              {fav.origin === "unknown"
                ? "Procedencia desconocida"
                : fav.origin}
            </h2>
            <Link to={`/detail/${fav.id}`}>
              <button
                className={
                  fav.status === "Dead"
                    ? "detail-dead"
                    : fav.status === "Alive"
                      ? "detail-alive"
                      : "detail"
                }
              >
                Detail
              </button>
            </Link>
            <button
              onClick={() => handleRemoveFav(fav.id, fav.name)}
              className="favButton"
            >
              ❤️
            </button>
            <Toaster position='top-left' />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
