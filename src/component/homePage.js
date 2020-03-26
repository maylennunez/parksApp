import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require('react-responsive-carousel').Carousel;

class homePage extends Component {
   
   render() {
       let pics = String(this.props.pics)


        return (
           
            <Carousel showArrows={true} interval={3000} transitionTime={500} autoPlay={true}> 
                    <div style={{ height: "600", width: "600" }}>  
                     <img  alt="" src="https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg"/>
                 <div style={{display: "flex", justifyContent: "center"}}>
                     <p  style={{width: "50px"}} className="legend2">Acadia, ME</p>
                 </div>
                 </div>
                 <div>
                     <img  alt= "arches" src="https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg"/>
                     <p className="legend">Arches, UT</p>
                 </div>
                 <div>
                     <img alt= "Canyonlands" src="https://www.nps.gov/common/uploads/structured_data/3C7A4FC2-1DD8-B71B-0B13118C99270C08.jpg"/>
                     <p className="legend">Canyonlands, UT </p>
                 </div>
                 <div style={{ height: "600", width: "600" }}>
                     <img alt= "Great Smoky Mountains" style={{ height: "900" }} src="https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg"/>
                     <p className="legend">Great Smoky Mountains, NC,TN

</p>
                 </div>
                 <div>
                     <img alt = "Glacier" src="https://www.nps.gov/common/uploads/structured_data/3C7FEF84-1DD8-B71B-0B26F3C536955733.jpg"/>
                     <p className="legend">Glacier, MT</p>
                 </div>
                 <div>
                     <img alt = "Crater Lake" src="https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0BEECDD24771C381.jpg"/>
                     <p className="legend">Crater Lake, OR</p>
                 </div>
                 <div>
                     <img alt = "Death Valley" src="https://www.nps.gov/common/uploads/structured_data/3C7EC929-1DD8-B71B-0B6F8851F7D62846.jpg"/>
                     <p className="legend">Death Valley CA,NV

</p>
                 </div>
                 <div>
                     <img alt = "Denali" src="https://www.nps.gov/common/uploads/structured_data/3C83C9C7-1DD8-B71B-0B9B669ED961F97E.jpg"/>
                     <p className="legend">Denali, AK

</p></div>
                 <div>
                     <img alt = "Everglades" src="https://www.nps.gov/common/uploads/structured_data/3C854681-1DD8-B71B-0BA4F6D9379336DF.jpg"/>
                     <p className="legend">Everglades, FL</p>             
                 </div>
             
               
            </Carousel>
        );
    }
}

export default homePage;