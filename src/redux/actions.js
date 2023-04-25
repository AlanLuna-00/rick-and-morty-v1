export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_CHARACTER_DETAIL = 'CLEAN_CHARACTER_DETAIL';

export const addFav = (char) => ({ type: ADD_FAV, payload: char })

export const removeFav = (id) => ({ type: REMOVE_FAV, payload: id })

export const filterCards = (gender) => ({ type: FILTER_CARDS, payload: gender })

export const orderCards = (order) => ({ type: ORDER_CARDS, payload: order })

export const getCharacterDetail = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        dispatch({ type: GET_CHARACTER_DETAIL, payload: data });
      } catch (error) {
        console.error(error);
      }
    };
  };
  

export const cleanCharacterDetail = () => ({ type: CLEAN_CHARACTER_DETAIL })