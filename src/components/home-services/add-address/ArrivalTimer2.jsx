import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import serviceProviderIcon from "../../../serviceprovider.png";
import SearchIcon from "../../../Screenshot_Capture_-_2023-10-30_-_11-18-51-removebg-preview.png";
import { CrossSvgIconWhite } from "../../../subcomponent/PreviewCode/svg";
const ArrivalTimer2 = ({ progress }) => {
  const [circleRadius, setCircleRadius] = useState(1000);
  const [serviceProviderMarkers, setServiceProviderMarkers] = useState([]);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(progress);
  }, [progress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCircleRadius((prevRadius) => (prevRadius === 1000 ? 900 : 1000));
    }, 1000);

    generateRandomServiceProviders();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentLocation = { lat: 37.7749, lng: -122.4194 };

  const generateRandomServiceProviders = () => {
    const newMarkers = Array.from({ length: 5 }).map((_, index) => {
      const randomLat = currentLocation.lat + (Math.random() - 0.5) / 50;
      const randomLng = currentLocation.lng + (Math.random() - 0.5) / 50;

      return {
        position: { lat: randomLat, lng: randomLng },
        icon: {
          url: serviceProviderIcon,
          scaledSize: new window.google.maps.Size(40, 40),
        },
      };
    });

    setServiceProviderMarkers(newMarkers);
  };
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300 h-screen flex justify-center items-center">
      <div className="w-3/5 bg-slate-900 rounded-2xl shadow-lg relative overflow-hidden">
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-slate-800 justify-center items-center flex-shrink-0 text-slate-300 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-slate-300 p-1.5 hover:bg-slate-500 inline-flex h-8 w-8 absolute top-4 right-4 transition-all duration-300"
          data-dismiss-target="#toast-message-cta"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <CrossSvgIconWhite />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-center mt-6 text-slate-100">
          Arrival Time
        </h2>
        <div className=" overflow-hidden mb-4 relative">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "300px" }}
            center={currentLocation}
            zoom={13}
          >
            <Circle
              center={currentLocation}
              radius={circleRadius}
              options={{
                strokeColor: "transparent",
                strokeOpacity: 0,
                strokeWeight: 0,
                fillColor: "red",
                fillOpacity: 0.2,
                clickable: false,
              }}
            />

            <Marker
              position={currentLocation}
              icon={{
                url: SearchIcon,
                scaledSize: new window.google.maps.Size(60, 60),
              }}
            >
              <div className="marker-pulse"></div>
            </Marker>

            {serviceProviderMarkers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={marker.icon}
              />
            ))}
          </GoogleMap>
        </div>

        <div className="flex items-center p-2">
          <div>
            <h2 className="text-xl font-bold mb-2 ml-44 text-slate-100">
              Searching for the nearest Service Provider
            </h2>
          </div>
        </div>
        <div className="relative w-full flex flex-col items-center">
          <div className="h-3 bg-gray-600 rounded-full overflow-hidden mb-4 w-9/12">
            <div
              className="h-full bg-orange-500 transition-all duration-10000"
              style={{ width: `${barWidth}%` }}
            ></div>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-700 h-12 w-60 text-white rounded-full transition-all duration-300 mb-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrivalTimer2;
