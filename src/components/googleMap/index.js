import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from "react"
import { observable } from "mobx";
class MapContainer extends React.Component{
    @observable mapStyles
    constructor()
    {
        super()
        this.mapStyles = {
            width: '100%',
            height: '100%',
          };
    }
    
    render(){
        return(
            <Map
          google={this.props.google}
          zoom={8}
          style={this.mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'abcdg'
  })(MapContainer);