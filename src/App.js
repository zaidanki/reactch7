//All imports that i am using during this project

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import PageNon from "./Components/PageNon";
import axios from "axios";
import apiKey from "./config";



 class App extends Component {


     state = {
         imgzur: [] //this state will get the img properties which i will be passing down
     };

     //a function that grabs the json from api and sorts it into a useable data
     renderImg = ( query = 'sunset') => {
         this.setState({
             loading: true
         });
         axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
             .then( res => this.setState({
                 imgzur: res.data.photos.photo,
                 loading: false
             }))
             .catch( error => {
                 console.log('Error Fetching Data', error)
             })
     };

  render() {
    return (
        // this is how my application is going to render with the routes.
        <div className="container">
            <BrowserRouter>
                <Header search={this.renderImg}  />
                <Switch>
                <Route exact path='/' render={ () => <Gallery renderImg={this.renderImg} imgzur={this.state.imgzur} />}/>
                <Route path='/dogs' render={ () => <Gallery search={'dogs'} renderImg={this.renderImg} imgzur={this.state.imgzur} /> } />
                <Route path='/comp' render={ () => <Gallery search={'computers'} renderImg={this.renderImg} imgzur={this.state.imgzur}  /> } />
                <Route path='/search/:searchVal' render={ () => <Gallery  renderImg={this.renderImg} imgzur={this.state.imgzur}/> } />
                <Route path='/cats' render={ () => <Gallery search={'cats'} renderImg={this.renderImg} imgzur={this.state.imgzur}  />   } />
                <Route component={PageNon}/>
                </Switch>
                </BrowserRouter>
                </div>

    );
  }
}

export default App;
