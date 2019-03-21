import React, {Component} from 'react';
import Images from "./comps/Images";
import NoImg from './comps/NoImg'
import axios from "axios";
import apiKey from "../config";


class Gallery extends Component {
    state = {
        imgzur: [],
        loading: true
    };


    componentDidMount() {
        this.searchForm()
    }

    searchForm = ( query = this.props.search || 'sunset') => {
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
        let imgs;
        let results;
        if(this.state.imgzur.length > 0){
            imgs = this.state.imgzur.map( a => {
                return (<Images url={`https://farm${a.farm}.staticflickr.com/${a.server}/${a.id}_${a.secret}.jpg`}
                        key={a.id}/>)
            })
            results = <h2>Results</h2>
        } else {
                imgs = <NoImg loading={this.state.loading} />
        }

        return (
            <div className='photo-container'>
                {results}
                <ul>
                    {imgs}
                </ul>
            </div>
        );
    }
}

export default Gallery