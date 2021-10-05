import React, { Component } from 'react';
import Home from './Component/Home';
import Navbar from './Navbar';
import { Contextprovider } from './Store/Context';
import './App.css';
import Productsapi from './Store/Dataapi';

class App extends Component {
    render() {
        return (
              <div className="App">
                <Contextprovider>
                    <Navbar/>
                    <div className="container">
                            <Home/>
                    </div>
                    <Productsapi/>
                </Contextprovider>
              </div>
        )
    }
}

export default App;
