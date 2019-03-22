import React, {Component} from 'react';
import Images from "./comps/Images";
import NoImg from './comps/NoImg'


class Gallery extends Component {

    // Mounting intitial components (if link chosen is defferent than home)
    componentDidMount() {
        if(this.props.search) {
            this.props.renderImg(this.props.search)
        } else {
            this.props.renderImg()
        }
    }
    // when using nav links, it updates. hence forth the pictures update
    componentDidUpdate(prevProps) {
        if(this.props.search !== prevProps.search) {
            console.log(this.props.location)
            this.props.renderImg(this.props.search)
        }
    }

    render() {
        let imgs;
        let results;

        // mapping the imgzur that i got from the renderImg function and using it to generate images
        // Also displaying results or <NoImg />

        if(this.props.imgzur.length > 0){
            imgs = this.props.imgzur.map( a => {
                return (<Images url={`https://farm${a.farm}.staticflickr.com/${a.server}/${a.id}_${a.secret}.jpg`}
                        key={a.id}/>)
            })
            results = <h2>Results</h2>
        } else {
                imgs = <NoImg loading={this.props.loading} />
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