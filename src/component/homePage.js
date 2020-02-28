import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require('react-responsive-carousel').Carousel;

//onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>

class homePage extends Component {
   
   render() {
       let pics = String(this.props.pics)
    //    console.log(pics, '-=--', typeof pics)
    //    if(!pics) {return } 
//    let newDiv =  React.createElement(
//         'div',
//         [pics],
//         [...pics]
//       ) 

        return (
            <Carousel showArrows={true}> 

                <div>  <img alt="" src="https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg"/><p className="legend">{}</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg"/><p className="legend">Legend 1</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C7A4FC2-1DD8-B71B-0B13118C99270C08.jpg"/><p className="legend">Legend 1</p></div><div><img  src="https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg"/><p className="legend">Legend 1</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C7FEF84-1DD8-B71B-0B26F3C536955733.jpg"/><p className="legend">Legend 1</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0BEECDD24771C381.jpg"/><p className="legend">Legend 1</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C7EC929-1DD8-B71B-0B6F8851F7D62846.jpg"/><p className="legend">Legend 1</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C83C9C7-1DD8-B71B-0B9B669ED961F97E.jpg"/><p className="legend">Legend 1</p></div><div><img src="https://www.nps.gov/common/uploads/structured_data/3C854681-1DD8-B71B-0BA4F6D9379336DF.jpg"/>
                
                
                </div>
                {/* {newDiv} */}
                {/* <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div> */}
            </Carousel>
        );
    }
}

export default homePage;