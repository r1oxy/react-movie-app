import React from 'react';
import unavailable from './unavailable.jpg'

const MovieCard = ({ movie }) => {
return (
    <div className="movie">
        <div>
        <p>{movie.Year}</p>
        </div>
        <div>
        <img
            src={
            movie.Poster !== "N/A"
                ? movie.Poster
                : "https://i.postimg.cc/yN7bJp89/unavailable.jpg"
            }
            alt={movie.Title}
        />
        </div>
        <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        </div>
    </div>
)
}

export default MovieCard;