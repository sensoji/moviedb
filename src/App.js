import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import MovieList from './components/movie_list';
import './App.css';


const API_KEY = '05ee30b47e7b6f4b4b52e1933ca990cc';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

class App extends Component {
  constructor(props){
  super(props);

  this.state = {
    movies: []
  }

  this.fetchMovies('react.js');
}

fetchMovies = (term) => {
  const url = `${ROOT_URL}&query=${term}`;
  return axios.get(url)
    .then((response)=>{
      this.setState({
        movies: response.data.results
      });
    });
}

render(){
  const fetchMovies = _.debounce((term) => {this.fetchMovies(term)}, 400);
  return (
    <div className="col-xs-12 main-container">
      <div className="container header">
        <img src="https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" />
      </div>
      <SearchBar onSearchTermChange={fetchMovies} />
      <MovieList movies = {this.state.movies} />
    </div>
  );
}
}

export default App;
