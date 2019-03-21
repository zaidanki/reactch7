import React from 'react'

const NoImg = (props) => {
    let textHtml;
    if(props.loading){
        textHtml = <h3>Loading...</h3>
    } else {
        textHtml = <h3>No Results Found</h3> + <p>You search did not return any results. Please try again.</p>
    }

    return (
        <li className="not-found">
            {textHtml}
        </li>
    );
};

export default NoImg