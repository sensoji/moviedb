import React from 'react';

const MovieListItem = ({movie}) => {
  let imageURL = '';
  if (movie.poster_path===null) {
    imageURL = "http://www.khumadori.com/wp-content/uploads/2015/04/Placeholder.jpg"
  }else {
    imageURL = `https://image.tmdb.org/t/p/w200_and_h300_bestv2${movie.poster_path}`;
  }

  let backdrop = '';

  if(movie.backdrop_path===null){
    backdrop = '';
  }else{
    backdrop = `https://image.tmdb.org/t/p/w200_and_h300_bestv2${movie.backdrop_path}`;
  }

  return (
    <li className="list-group-item">
      <div className="media contains">
        <div className="media-left">
          <img className="media-object poster" src={imageURL} alt="poster" />
        </div>
        <div className="media-body blurb">
          <div className="media-heading"><strong>{movie.title}</strong> <em>&nbsp;{movie.release_date.substring(0,4)}</em> </div>
          <div>{movie.overview}</div>

          <div className="links">
            <div className="circle-score">{movie.vote_average}</div>
            <a className="btn btn-secondary btn-lg" onClick={ ()=> window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank") }>View</a>
          </div>
        </div>

      </div>
    </li>
  );
}

export default MovieListItem;
