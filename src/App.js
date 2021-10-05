import React, { Component } from 'react';
import Home from './Component/Home';
import Navbar from './Navbar';
import { Contextprovider } from './Store/Context';
import './App.css';

class App extends Component {
    render() {
        return (
              <div className="App">
                <Contextprovider>
                    <Navbar/>
                    <div className="container">
                            <Home/>
                    </div>
                </Contextprovider>
              </div>
        )
    }
}

export default App;
