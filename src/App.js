import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import PageNon from "./Components/PageNon";

 class App extends Component {
  render() {
    return (

        <div className="container">
            <BrowserRouter>
                <Header />

                <Route exact path='/' render={ () => <Gallery/>}/>
                <Route path='/dogs' render={ () => <Gallery search={'dogs'}/> } />
                <Route path='/computers' render={ () => <Gallery search={'computers'}/> } />
                <Route path='/cats' render={ () => <Gallery search={'cats'}/>  } />
                <Route component={PageNon}/>

                </BrowserRouter>
                </div>

    );
  }
}

export default App;
