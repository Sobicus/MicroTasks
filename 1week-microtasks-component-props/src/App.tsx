import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div>
            <Header title={'Header string'}/>
            <Body title={'Body string'}/>
            <Footer title={'Footer string'}/>
        </div>
    );
}

export default App;
