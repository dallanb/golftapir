import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../../routes';
import './App.scss';
import '../../assets/styles/global.scss';

class App extends React.Component {
    render() {
        return <Router>{Routes}</Router>;
    }
}

export default App;
