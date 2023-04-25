import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, GET_CHARACTER_DETAIL, CLEAN_CHARACTER_DETAIL } from "./actions";

const favoritesFromStorage = localStorage.getItem('favorites')

const initialState = {
  allCharacters: [],
  myFavorites: favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [],
  characterDetail: {},
};
const rootReducer = (state = initialState, action) => {
  let updatedFavorites = [];
  switch (action.type) {
    case ADD_FAV:
      updatedFavorites = [...state.myFavorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: updatedFavorites,
      };
    case REMOVE_FAV:
      updatedFavorites = state.myFavorites.filter((item) => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        myFavorites: updatedFavorites,
      };
    case FILTER_CARDS:
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites:
          action.payload === 'alls'
            ? [...state.allCharacters]
            : filteredCharacters
      };
    case ORDER_CARDS:
      let sortedFavorites = [...state.myFavorites];
      sortedFavorites.sort((a, b) => {
        if (action.payload === 'A') {
          return a.id - b.id;
        } else if (action.payload === 'D') {
          return b.id - a.id;
        }
        return null
      });
      return {
        ...state,
        myFavorites: sortedFavorites
      }
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case CLEAN_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
