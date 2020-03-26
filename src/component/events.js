import React, { Component } from 'react';
import axios from 'axios';

class events extends Component {
state = {
alerts:{}
}
    componentDidMount() {
        axios.get(`https://developer.nps.gov/api/v1/alerts?parkCode=acad,drto,arch,yell,cany,yose,zion,olym,redw,glac,hale,havo,meve,grca,ever,dena,jotr,brca,blue,bibe,cave,chis,crla,deva,glac,goga,grca,grsm,maca,moru,mora,romo,shen,redw,seki,gett,viis,blri,lavo&api_key=XFE9btfYA8WcokTn2LdkBpk6g8fSQmuwDLYgd6Ka`).then(res => {
          return 
          console.log(res)
        // })
        

          this.setState({
            alerts: res.data,
            ready: true
          })
        })
        }
        
      
      showAlerts =() => {
       this.state.alerts.map((eachAlert, i) => {
           console.log(this)
         return (
         
            <div key={i}> 
                 {eachAlert.title}  
           </div> 
         )
       })
           
       console.log(this.state.alerts)
    }


    render() {
        return (
            <div>
                <events/>
            </div>
        );
    }
}

export default events;