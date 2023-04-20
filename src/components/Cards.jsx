import Card from './Card/Card';
import SearchBar from './SearchBar/SearchBar';

export default function Cards({characters, onClose, onSearch}) {
   return( <>
   <SearchBar onSearch={onSearch} />
   <div className='container'>
      {characters.map((value, i) => {
         console.log(value.name)
         return (
          <Card
            key={i}
            id={value.id}
            name={value.name}
            status={value.status}
            species={value.species}
            gender={value.gender}
            origin={value.origin.name}
            image={value.image}
            // location={value.location.name}
            onClose={() => onClose(i)}
         /> 
         )
      })}
   </div>;
   </>
   )
}
