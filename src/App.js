import {useEffect,useState} from 'react';
// 11343fb8
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./moviecard";
const API_URL="http://www.omdbapi.com?apikey=11343fb8";

const movie1={
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
const App= ()=>{
    const [movies,setmovies]=useState([]);
    const [searchTerm,setsearchTerm]=useState('');

    const searchMovies = async (title) => {
        const response =await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setmovies(data.Search);
      };

    useEffect(()=>{
        searchMovies('superman');      //sets default page search bar as batman
    },[]);

    return(
        <div className='app'>
            <h1>movies</h1>
            <div className='search'>
                <input placeholder="search for movies"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}//e is event
                /> 
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}//connecting search bar with search icon
                 />       
            </div>

            {
                movies?.length>0
                ?(
                    <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
            </div>
                ) :(
                    <div className='empty'>
                        <h2>no movie found</h2>
                    </div>
                )
            }
            
        </div>
    );
}
export default App;