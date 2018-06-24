import React from 'react';
import MovieListItem from './movie_list_item';

const MovieList = (props) => {
  const MovieItems = props.movies.map((movie) => {
    return <MovieListItem key={movie.id} movie={movie} />
  })
  return (
    <ul className="col-sm-12">
      {MovieItems}
    </ul>
  );
}

export default MovieList;
