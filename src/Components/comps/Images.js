import React from 'react'

// How my images are going to be rendered

const Images = (props) => {
    return (
            <li>
                <img src={props.url} alt=''/>
            </li>
    );
};

export default Images