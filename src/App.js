import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";

 class App extends Component {
  render() {
    return (

        <div className="container">
            <BrowserRouter>
                <Header />
                <Route exact path='/' render={ () => <Gallery/>}/>
                <Route path='/cats' render={ () => <Gallery search='cats'/>  } />
                <Route path='/dogs' render={ () => <Gallery search='dogs' valS={1} /> } />
                <Route path='/computers' render={ () => <Gallery search='computers' valS={1} /> } />
                </BrowserRouter>
                </div>

    );
  }
}

export default App;
