
import './App.css';
// import Home from './component/Home';
import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import ParkDetails from './component/parksDetail';
import Parks from './component/parks';
import Homepage from './component/homePage';
import Navbar from './component/navBar'



class App extends Component {

  state = {
    parks:[],
    // visitorc:[]
    ready: false,
    pics: ''
  }

  componentDidMount() {
    axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=acad,drto,arch,yell,cany,yose,zion,olym,redw,glac,hale,havo,meve,grca,ever,dena,jotr,brca,blue,bibe,cave,chis,crla,deva,glac,goga,grca,grsm,maca,moru,mora,romo,shen,redw,seki,gett,viis,blri,lavo&fields=images&api_key=XFE9btfYA8WcokTn2LdkBpk6g8fSQmuwDLYgd6Ka`).then(res => {
      console.log(res.data.data)

     

      this.setState({
        parks: res.data.data,
        ready: true
      })
      this.makeCarousel(res.data.data)

    })
  }

  
  makeCarousel = (parks) => {
    let pics = ''
    parks.map(eachPark => {
      pics += `<div><img src="${eachPark.images[0].url}${parks.name}"/><p className="legend">${eachPark.name}</p></div>`
    })
    console.log(pics, typeof pics)
    this.setState({pics: String(pics)})
  }

  showParks =  () => {
    let parksArr =  this.state.parks.map((eachPark, i) => {

      return <div className="gallery" key={i} >
        <img src={eachPark.images[0].url} alt=''style={{height:"300", width:"600"}} />
    <Link  to={`/park/${eachPark.id}`}><h2>{eachPark.name}</h2> <br/>{eachPark.states} </Link>
        
      </div>
    })

    return parksArr
  }

  render() {
    console.log(this.state)
    return (



      <div>
        {/* <Link to="/parks">Parks</Link> */}
        <Navbar/>


        
 
        {/* {this.state.parks.map(park => {
          return <><Link to={`/${park.id}`}>{park.name}</Link><br/></>
        })} */}
        <Switch>
          <Route exact path="/parks" render={props => <Parks {...props} showParks={this.showParks} parks={this.state.parks} ready={this.state.ready}/>} />
          <Route exact path="/park/:parkdetail" render={props => <ParkDetails {...props} showParks={this.showParks} parks={this.state.parks} ready={this.state.ready}/>} />
          <Route exact path="/" render={props => <Homepage {...props} pics={this.state.parks} />} />
          {/* <Route exact path="/" render={props => <Home  {...props}/>} /> */}

        </Switch>
       

      </div>

    );
  }
}

export default App;




