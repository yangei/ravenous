import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import {Yelp} from './util/Yelp';

const perPage = 9;
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: [],
      offset: 0,
      term: '',
      location: '',
      sortBy: ''
    }
    this.searchYelp = this.searchYelp.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.updateSearchParams = this.updateSearchParams.bind(this);
  }

  searchYelp() {
    Yelp.search(this.state.term, this.state.location, this.state.sortBy, this.state.offset, perPage)
    .then( businesses => {
      this.setState({ businesses: businesses})
    });
  }

  updateSearchParams(term, location, sortBy){
    this.setState({
      term: term,
      location: location,
      sortBy: sortBy
    }, () => {
      this.searchYelp();
    });

  }

  updatePage(pageNum){
    let newOffset = pageNum * perPage;
    this.setState({
      offset: newOffset
    }, () => {
      this.searchYelp();
    });
  }

  render() {
    return (
      <div className="app">
        <h1>ravenous</h1>
        <SearchBar setSearchParams={this.updateSearchParams}/>
        <BusinessList businesses={this.state.businesses} onPageChange={this.updatePage}/>
      </div>
    );
  }
}

export default App;
