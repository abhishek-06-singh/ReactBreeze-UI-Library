import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import serviceProviderIcon from "../../../serviceprovider.png";
import { CrossSvgIconWhite } from "../../../subcomponent/PreviewCode/svg";

function DirectionMap({
  serviceProvider = {
    name: "John Doe",
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    statusMessage: "Service Provider is on its way, please wait.",
  },
  currentLocation = { lat: 23.2332, lng: 77.4343 },
  destination = { lat: 23.2356, lng: 77.4006 },
}) {
  const [route, setRoute] = useState(null);
  const [travelInfo, setTravelInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const timeoutId = setTimeout(() => {
  //       if (isLoading) {
  //         setIsLoading(false);
  //       }
  //     }, 2000);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }, [isLoading]);

  const deliveryGuyIcon = {
    url: serviceProviderIcon,
    scaledSize: new window.google.maps.Size(60, 70),
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300 h-screen flex justify-center items-center">
      <div className="w-3/5 bg-white rounded-2xl shadow-lg relative overflow-hidden">
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 absolute top-4 right-4 transition-all duration-300"
          data-dismiss-target="#toast-message-cta"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <CrossSvgIconWhite />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-center mt-6 text-slate-800">
          Directions
        </h2>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "300px" }}
          center={currentLocation}
          zoom={14}
          options={{
            suppressMarkers: true,
          }}
        >
          {!isLoading && (
            <DirectionsService
              options={{
                destination: destination,
                origin: currentLocation,
                travelMode: "DRIVING",
              }}
              callback={(response) => {
                if (response !== null) {
                  setRoute(response);
                }
              }}
            />
          )}

          {route !== null && (
            <>
              <DirectionsRenderer
                directions={route}
                options={{
                  polylineOptions: {
                    strokeColor: "blue",
                  },
                }}
              />

              {route.routes && route.routes.length > 0 && (
                <>
                  <Marker
                    position={destination}
                    icon={deliveryGuyIcon}
                    zIndex={1}
                  />
                  <Marker position={currentLocation} />
                </>
              )}
            </>
          )}
        </GoogleMap>

        {/* Service Provider Details */}
        <div className="flex items-center p-2 pl-6 pt-4">
          <div className="pr-4">
            {isLoading ? (
              <Skeleton circle width={80} height={80} />
            ) : (
              <img
                src={serviceProvider.photo}
                alt="Service Provider"
                className="rounded-full w-16 h-16 border-2 border-gray-200"
              />
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">
              {isLoading ? <Skeleton width={80} /> : serviceProvider.name}
            </h2>
            <p className="text-gray-600 mb-2">
              {isLoading ? (
                <Skeleton width={150} />
              ) : (
                serviceProvider.statusMessage
              )}
            </p>
            {travelInfo && (
              <div className="text-sm">
                <p className="text-gray-600 text-lg">
                  Estimated travel time: 15 min
                </p>
                <p className="text-gray-600 text-lg">
                  Distance: {travelInfo.distance}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map Legend */}
        <div className="text-xs text-gray-600 p-2 mt-auto ml-7">
          <p>Legend: blue line represents the route</p>
        </div>
      </div>
    </div>
  );
}

DirectionMap.propTypes = {
  serviceProvider: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    statusMessage: PropTypes.string,
  }),
  currentLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  destination: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default DirectionMap;
