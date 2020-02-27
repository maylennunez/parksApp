import React, { Component } from 'react';
// import axios from 'axios'
class parks extends Component {






    render() {
        return (
            
            <div>
               
         {this.props.showParks()} 
            </div>
        );
    }
}

export default parks;