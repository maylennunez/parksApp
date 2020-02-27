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

        return (<div>
            {park && <>
           <h1>{park.name}</h1>
           <h3>{park.states}</h3>
           <br/>{park.description}
           <br/>{park.weatherInfo}
           <br/>{park.directionsInfo}
           {/* <br/> <a href={park.directionsUrl}>Plan your Visit</a> */}
           {/* <br/> <img alt= "images" src={park.images[0].url}/> */}
           <br/> {this.showImages(park.images)}
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


