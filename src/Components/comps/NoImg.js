import React from 'react'

// this is for loading, and showing results (if results are there

const NoImg = (props) => {
    let textHtml;
    if(props.loading){
        textHtml = <h3>Loading...</h3>
    } else {
        textHtml = <h3>No Results Found</h3>
    }

    return (
        <li className="not-found">
            {textHtml}
        </li>
    );
};

export default NoImg