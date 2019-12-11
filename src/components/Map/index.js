import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import mapStyled from './mapStyled';

const MyMapComponent = compose(
    withProps({
        googleMapURL:   "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2VEv31f9riUUSVUz1S8tWITJl-0yp_9U&v=3.exp&libraries=geometry,drawing,places",
        loadingElement:   <div style={{ height: `100%` }} />,
        containerElement:    <div style={{ height: `100%` }} />,
        mapElement:    <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap  defaultZoom={16} defaultCenter={{ lat: 40.1816633, lng: 44.5125112 }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: 40.1816633, lng: 44.5125112 }} />
        )}
    </GoogleMap>
));

class ContactMap extends Component {
    render() {
        return (
            <MyMapComponent isMarkerShown className='google-map' />
        )
    }
}

export default ContactMap;