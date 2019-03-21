import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header";
import Gallery2 from "./Components/Gallery";

 class App extends Component {
  render() {
    return (

        <div className="container">
            <BrowserRouter>
                <Header />
                <Route exact path='/' render={Gallery2}/>
                <Route path='/cats' render={ () => <Gallery2 search='cats'/>  } />
                <Route path='/dogs' render={ () => <Gallery2 search='dogs' valS={1} /> } />
                <Route path='/computers' render={ () => <Gallery2 search='computers' valS={1} /> } />
                </BrowserRouter>
                </div>

    );
  }
}

export default App;
