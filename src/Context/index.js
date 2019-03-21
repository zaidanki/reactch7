import React, { Component } from 'react';
import axios from 'axios'
import apiKey from '.././config.js'

const GalleryContext = React.createContext();

export class Provider extends Component {
    state = {
        img: [],
        loading: true
    };
    componentDidMount() {
        this.searchForm()
    }

    searchForm = ( query = 'sunset') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then( res => this.setState({
              img: res.data.photos.photo,
              loading: false
          }))
          .catch( error => {
              console.log('Error Fetching Data', error)
          })
    };

    render() {
        // console.log(this.state.img)
        return (
            <GalleryContext.Provider value={{
                img: this.state.img,
                actions: {
                    searchHere: this.searchForm
                }
            }}>
                { this.props.children }
            </GalleryContext.Provider>
        )
    }
}

export const Consumer = GalleryContext.Consumer