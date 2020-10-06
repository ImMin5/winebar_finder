import React from 'react';
import './App.css';
import Navigation from './components/navbar';
import Jumbo from './components/jumbo';
import Tabbar from './components/tabbar';
import Search from './components/search_input';

class App extends React.Component {
    render() {
        return (
                <div className="App">
                    <Navigation></Navigation>
                    <Jumbo></Jumbo>
                    <Search></Search>
                </div>
        );
    }
}


export default App;
