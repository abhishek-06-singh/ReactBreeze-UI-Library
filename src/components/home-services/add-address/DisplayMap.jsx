// DisplayMap.js

import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const DisplayMap = ({
  currentLocation,
  onLocationSelect,
  updateFormFields,
}) => {
  const mapLocationRef = useRef();
  const [map, setMap] = useState(null);

  const [mapLocation, setMapLocation] = useState({
    lat: 23.2599333,
    lng: 77.412615,
  });
  console.log("mapLocation", mapLocation);
  useEffect(() => {
    setMapLocation(currentLocation);

    if (map) {
      const newPosition = {
        lat: 37.7749,
        lng: -122.4194,
      };

      map.panTo(newPosition);
    }
  }, [currentLocation, map]);

  const mapStyles = {
    height: "475px",
    width: "95%",
  };

  const onLoad = (map) => {
    setMap(map);
  };

  return (
    <div style={{ position: "relative", width: "110%", height: "400px" }}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{
          lat: mapLocation ? mapLocation.lat : 37.7749,
          lng: mapLocation ? mapLocation.lng : -122.4194,
        }}
        zoom={15}
        onClick={(event) =>
          onLocationSelect(event.latLng.lat(), event.latLng.lng())
        }
        onLoad={onLoad}
      >
        {mapLocation && (
          <Marker
            position={{ lat: mapLocation.lat, lng: mapLocation.lng }}
            draggable={true}
            onDragEnd={(event) => {
              const newLocation = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              };
              setMapLocation(newLocation);
              updateFormFields({ currentLocation: newLocation });
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default DisplayMap;
