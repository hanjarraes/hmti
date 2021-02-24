import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map(){
  return(
    <GoogleMap
      defaultZoom={10} 
      defaultCenter={{ lat:1.145963, lng: 104.016150}} 
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

const PetaHmti = () => {
  return (
        <div className="google-map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{height:'100%'}} />}
            containerElement={<div style={{height:'100%'}} />}
            mapElement={<div style={{height:'100%'}} />}
          />
        </div>
  );
};
export default PetaHmti;