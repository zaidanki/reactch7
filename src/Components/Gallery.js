import React from 'react';
import Images from "./comps/Images";
import NoImg from './comps/NoImg'
import {Consumer} from "../Context";


function Gallery(props) {
    return (
        <Consumer>
            {({img, actions}) => {
                if(props.search){
                    actions.searchHere(props.search)
                }
                let imgs;
                let resultH1;
                if (img.length > 0) {
                    resultH1 = <h2>results</h2>;
                    imgs = img.map(a =>
                        <Images url={`https://farm${a.farm}.staticflickr.com/${a.server}/${a.id}_${a.secret}.jpg`}
                                key={a.id}/>
                    )
                } else {
                    imgs = <NoImg/>
                }
                return (
                    <div className='photo-container'>
                        {resultH1}
                        <ul>
                            {imgs}
                        </ul>
                    </div>
                )
            }}
        </Consumer>

    );
}

export default Gallery