import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import PageNon from "./Components/PageNon";
import axios from "axios";
import apiKey from "./config";

 class App extends Component {

     state = {
         imgzur: [],
         loading: true
     };

     renderImg = ( query = 'sunset') => {
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

        <div className="container">
            <BrowserRouter>
                <Header search={this.renderImg} />

                <Route exact path='/' render={ () => <Gallery renderImg={this.renderImg} imgzur={this.state.imgzur} loading={this.state.loading} />}/>
                <Route path='/dogs' render={ () => <Gallery search={'dogs'} renderImg={this.renderImg} imgzur={this.state.imgzur} loading={this.state.loading} /> } />
                <Route path='/computers' render={ () => <Gallery search={'computers'} renderImg={this.renderImg} imgzur={this.state.imgzur} loading={this.state.loading} /> } />
                <Route path='/cats' render={ () => <Gallery search={'cats'} renderImg={this.renderImg} imgzur={this.state.imgzur} loading={this.state.loading} />   } />
                <Route component={PageNon}/>

                </BrowserRouter>
                </div>

    );
  }
}

export default App;
