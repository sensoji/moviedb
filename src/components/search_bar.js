import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''}
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={event => this.onInputChange(event.target.value)}
            placeholder="Search for a movie title e.g. Star Wars" />
        </form>
      </div>
    );
  }


}

export default SearchBar;
