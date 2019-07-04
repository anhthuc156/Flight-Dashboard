import React from 'react';
import './App.css';

class App extends React.Component {
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.panel}
                </div>
            </div>
        );
    }
 
}

// App.proTypes = {
//     panel: PropTypes.object.isRequired,
//     panel2: PropTypes.object.isRequired,
//     panel3: PropTypes.object.isRequired
// }
export default App;
