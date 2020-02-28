import React, { Component } from 'react';
// import {Switch,Route} from 'react-router-dom'
// import axios from'axios'
// import {Link } from 'react-router-dom'


class parksDetail extends Component {

    state = {
        park: {},
        // ready: false
    }

    findParkDetails = () => {
        // console.log(this.props)
        let park = this.props.parks.find(eachPark => {
            return eachPark.id === this.props.match.params.parkdetail
        })
    
        return ( <div> {park && <>
       
           <h1>{park.name}</h1>
           <p> {park.states}</p>
           <br/>{park.description}
           <h4>Weather:</h4> {park.weatherInfo}
           <h4>Direction:</h4>{park.directionsInfo}
           <br/> {this.showImages(park.images)}
            {/* {park && <> */}
           {/* <br/> <a href={park.directionsUrl}>Plan your Visit</a> */}
           {/* <br/> <img alt= "images" src={park.images[0].url}/> */}
            </> }
        </div>)
       
        // this.setState({
        //     park: 
        //     ready: true
        // })
    }

    showImages = (imagesArr) => {
        return imagesArr.map((eachImage, index) => {
            return (<img  className="img"key={index} alt={eachImage.title} src={eachImage.url}/>)
        })
    }
 
    
   

    render() {
        console.log(this.props.ready)
         
        // console.log(this.props.match.params.parkdetail)
        return (
            <div>
                
                {this.props.ready? (this.findParkDetails()) : ("Loading...")}
                
                {/* {this.state.ready? (this.state.park.id) : ("Loading")} */}
            </div>
        );
    }
}

export default parksDetail;


