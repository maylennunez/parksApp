import React, { Component } from 'react';


class parks extends Component {


    render() {
        return (
            
            <div className="parks">
                {this.props.ready ? "" : <h2>Loading...</h2>}

                    {this.props.showParks()} 
            </div>
        );
    }
}

export default parks;