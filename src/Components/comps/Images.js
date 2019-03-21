import React from 'react'

const Images = (props) => {
    return (
            <li>
                <img src={props.url} alt=''/>
            </li>
    );
};

export default Images