import React from 'react';
import './App.css';
import Dashboard from './view/Dashboard';
class App extends React.Component {
    render() {
        return (
            <div>
                <p>Your detail:</p>
                <Dashboard/>
            </div>
            
        );
    }
}
export default App;
