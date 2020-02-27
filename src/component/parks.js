import React, { Component } from 'react';
// import axios from 'axios'
class parks extends Component {






    render() {
        return (
            
            <div>
                {this.props.ready ? "" : <h2>Loading...</h2>}

         {this.props.showParks()} 
            </div>
        );
    }
}

export default parks;