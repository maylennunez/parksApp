import React, { Component } from 'react';
import axios from 'axios';

class alerts extends Component {
state = {
alerts:{},
// ready:false
}
//     componentDidMount() {
//         axios.get(`https://developer.nps.gov/api/v1/alerts?parkCode=acad,drto,arch,yell,cany,yose,zion,olym,redw,glac,hale,havo,meve,grca,ever,dena,jotr,brca,blue,bibe,cave,chis,crla,deva,glac,goga,grca,grsm,maca,moru,mora,romo,shen,redw,seki,gett,viis,blri,lavo&api_key=XFE9btfYA8WcokTn2LdkBpk6g8fSQmuwDLYgd6Ka`)
//         .then((res )=> {
//           console.log(res.total.data.data)
          
//           .catch((err) =>{
//           console.log(err)
//           })
//         // });
            
//           this.setState({
//             alerts: res.data.data,
//             // ready: true
//           })
//     })
// }   

      
//       showAlerts =() => {
//       this.state.alerts.map((eachAlert, i) => {
//            console.log(this)
//          return  <div key={i}> 
//                  {eachAlert.title}  
//            </div> 
      
//        })
//       }

    
       
    
    

    render() {
        return (
            <div>
                {this.showAlerts}
            </div>
        );
    }
}


export default alerts;