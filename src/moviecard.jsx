import React from 'react';

//seperate code for each movie box is made here


const MovieCard=({movie})=>{
    return(
        <div className='movie'>
                    <div>
                        <p>{movie.Year}</p>
                    </div>

                    <div>
                        <img src={movie.Poster}></img>
                    </div>

                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                </div>
    )
}
export default MovieCard;