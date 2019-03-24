import React, {Component} from 'react';
import Nav from "./comps/Nav";
import { withRouter } from 'react-router-dom';



//this is my header, which includes the searchbar



class Header extends Component {

    handleSubmit = e => {
        e.preventDefault();
        let path = `/search/${this.query.value}`;
        this.props.history.push(path);
        this.props.search(this.props.history.location.pathname.slice(8));
        e.currentTarget.reset();
    };


    render() {
        return (
            // this is how it is going to be rendered!  + the <Nav />
            <header>
                <h1>Chapter 7 React App</h1>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="search"
                           name="search"
                           placeholder="Search"
                           ref={input => this.query = input}
                           required/>
                    <button type="submit" className="search-button" >
                        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>
                </form>

                <Nav/>

            </header>
        );
    }
}

export default withRouter(Header)