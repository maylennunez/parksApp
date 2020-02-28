import React, { Component } from 'react';

class parksDetail extends Component {

    state = {
        park: {},
       
    }

    findParkDetails = () => {
        
        let park = this.props.parks.find(eachPark => {
            return eachPark.id === this.props.match.params.parkdetail
        })
    
        return ( <div> {park && <>
       
           <h1>{park.name}</h1> 
           <br/>{park.description}
           <h4>Weather:</h4> {park.weatherInfo}
           <h4>Direction:</h4>{park.directionsInfo}<br/>
           <br/> 
           <div className="img-parent">
            {this.showImages(park.images)}
           </div> 
            </> }
        </div>)
       
      
    }

    showImages = (imagesArr) => {
        return imagesArr.map((eachImage, index) => {
            return (
            
                <img  className="img"key={index} alt={eachImage.title} src={eachImage.url}/>
               
                )
        })
    }
 
    
   

    render() {
        console.log(this.props.ready)
         
        
        return (
            <div style={{padding: "10px"}}>
                
                {this.props.ready? (this.findParkDetails()) : ("Loading...")}
                
            </div>
        );
    }
}

export default parksDetail;


