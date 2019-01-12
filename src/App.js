import React, { Component } from 'react';
import './App.css';
import config from './config.js'
import axios from 'axios';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Main from './Components/Main';

const api_key = config.config.api_key;
// const api_secret = config.config.api_secret;

const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&format=json&nojsoncallback=1`;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'puppies') => {
    axios.get(`${url}&text=${query}`)
      .then(response => {
        // console.log(response.data.photos);
        const photolist = [];
        response.data.photos.photo.forEach(photo => {
          photolist.push(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`)
          // photolist.push(`https://www.flickr.com/photos/${photo.owner}/${photo.id}/`)
        })
        return photolist;
      }).then(photolist => {
        this.setState({ gifs: photolist, loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state.gifs)
    // below { (this.state.loading) ? ... : ... }
    // <GifList
    //   data={this.state.gifs}
    // />

    // Create a new Main component that contains Header and GifList
    // render the Main component inside the Routes, so that SearchForm has access to
    // the Router's history prop
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render= { (props) => {
              return (
                <Main {...props}
                  performSearch={this.performSearch} 
                  isLoading={this.state.loading} 
                  gifsState={this.state.gifs}
                />
              )}} />
            <Route path="/search/:query" render= { (props) => {
              return (
                <Main {...props}
                  performSearch={this.performSearch} 
                  isLoading={this.state.loading} 
                  gifsState={this.state.gifs}
                />
              )}} />
            <Route render={(props) => <NotFound {...props}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
