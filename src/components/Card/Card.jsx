import { Link } from 'react-router-dom';
import './Card.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import toast, { Toaster } from 'react-hot-toast';

const Card = (props) => {

   const [fav, setFav] = useState(false)

   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch()
   
   const handleFav = () => {
      if (fav) {
         dispatch(removeFav(props.id))
         setFav(false)
      } else {
         dispatch(addFav(props))
         setFav(true)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }
      });
   }, [myFavorites, props.id]);

   const addingFav = (name) => toast.success(`${name} agregado a favs ❤️`);
   const removingFav = (name) => toast.error(`${name} eliminado de favs 💔`);

   return (
      <div className={`card-pj ${props.status === 'Alive' ? 'alive' : props.status === 'Dead' ? 'dead' : ''}`}>
         <img className="img" src={`${props.image}`} alt={`${props.name}`} />
         <h1 className="name">{props.name}</h1>
         <h2 className={props.status === 'Dead' ? 'status_dead' : props.status === 'Alive' ? 'status_alive' : 'gender'}>{props.status === 'unknown' ? 'Estado de vida desconocido' : props.status}</h2>
         <h2 className="gender">{props.gender}</h2>
         <h2 className="gender">{props.species}</h2>
         <h2 className="origin">{props.origin === 'unknown' ? 'Procedencia desconocida' : props.origin}</h2>
         <Link to={`/detail/${props.id}`}><button className={props.status === 'Dead' ? 'detail-dead' : props.status === 'Alive' ? 'detail-alive' : 'detail'}>Detail</button></Link>
         <button onClick={props.onClose} className="quit">X</button>
         {
            fav ? (
               <button className='favButton isFav' onClick={() => {
                  handleFav()
                  removingFav(props.name)
               }}>❤️</button>
            ) : (
               <button className='favButton isntFav' onClick={() => {
                  handleFav()
                  addingFav(props.name)
               }}>💔</button>
            )
         }
         <Toaster position='top-left'/>
      </div>
   );
}

export default Card;
