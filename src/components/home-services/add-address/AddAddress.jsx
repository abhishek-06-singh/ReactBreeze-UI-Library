import React, { useState, useEffect } from "react";
import { CrossSvgIconWhite } from "../../../subcomponent/PreviewCode/svg";
import DisplayMap from "./DisplayMap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const AddAddress = ({ isVisible, title, handleClose }) => {
  const [type, setType] = useState(true);
  const [address, setAddress] = useState("");
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [city, setCity] = useState("");
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  console.log("submittedData", submittedData);

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);

    try {
      const results = await geocodeByAddress(selectedAddress);

      if (results.length > 0 && results[0].place_id) {
        const placeId = results[0].place_id;
        setSelectedPlaceId(placeId);

        const latLng = await getLatLng(results[0]);
        setCity(results[0].formatted_address);

        setCurrentLocation({ lat: latLng.lat, lng: latLng.lng });
      }
    } catch (error) {
      console.error("Error selecting address:", error);
    }
  };

  const fetchPlaceDetails = async (placeId) => {
    return new Promise((resolve, reject) => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(place);
        } else {
          reject(status);
        }
      });
    });
  };

  useEffect(() => {
    if (selectedPlaceId) {
      fetchPlaceDetails(selectedPlaceId)
        .then((placeDetails) => {
          const latLng = placeDetails.geometry.location;
          setCurrentLocation({ lat: latLng.lat(), lng: latLng.lng() });
        })
        .catch((error) => {
          console.error("Error fetching place details:", error);
        });
    }
  }, [selectedPlaceId]);

  const handleInputChange = (newAddress) => {
    setAddress(newAddress);
    setSuggestions([]);
    setLoadingSuggestions(true);

    if (newAddress) {
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        { input: newAddress },
        (predictions, status) => {
          setLoadingSuggestions(false);
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions(predictions);
          }
        }
      );
    } else {
      setLoadingSuggestions(false);
    }
  };
  const handleOptionClick = (suggestion) => {
    setAddress(suggestion.description);
    setSuggestions([]);

    if (suggestion.place_id) {
      setSelectedPlaceId(suggestion.place_id);
    }

    if (
      suggestion.structured_formatting &&
      suggestion.structured_formatting.secondary_text
    ) {
      const cityInfo = suggestion.structured_formatting.secondary_text;
      setCity(cityInfo);
    }
  };

  const handleApartmentNumberChange = (e) => {
    setApartmentNumber(e.target.value);
  };

  const handleTypeToggle = (value) => {
    setType(value);
  };
  const handleSubmit = () => {
    const data = {
      type,
      address,
      city,
      currentLocation,
      apartmentNumber,
    };
    setSubmittedData(data);
  };
  const getUserCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  const updateFormFields = (newData) => {
    console.log("newData", newData);
    setCity(newData.city);
    setAddress(newData.address);
    setCurrentLocation(newData.currentLocation);
    setApartmentNumber(newData.apartmentNumber);

    setType(newData.type);

    setSubmittedData(newData);
  };
  useEffect(() => {
    getUserCurrentLocation();
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300 h-screen flex justify-center items-center">
      <div className="w-3/5 bg-white rounded-lg p-3 pb-2 relative">
        {/* Cross Icon */}
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 absolute top-4 right-4"
          data-dismiss-target="#toast-message-cta"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <CrossSvgIconWhite />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-medium mb-4 text-center">Add Address</h2>

        {/* Places Autocomplete */}
        <div className="flex flex-col text-center">
          <div className="relative mb-4">
            <PlacesAutocomplete
              value={address}
              onChange={handleInputChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                loadingSuggestions,
                suggestions,
                handleOptionClick,
              }) => (
                <div className="mt-0 relative">
                  <input
                    {...getInputProps({
                      placeholder: "Search Your Home Address",
                      className:
                        "w-full md:w-2/3 mx-auto border border-gray-400 rounded px-2 py-1",
                    })}
                  />
                  {loadingSuggestions && (
                    <div className="loading-skeleton" style={{ zIndex: 2 }} />
                  )}
                  {suggestions.length > 0 && (
                    <div
                      className="max-h-4+0 overflow-y-auto p-2 bg-white border border-gray-400 rounded absolute left-0 right-0 transition-opacity"
                      style={{
                        opacity: loadingSuggestions ? 0.5 : 1,
                        zIndex: 1,
                      }}
                    >
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={suggestion.place_id}
                          className="cursor-pointer hover-bg-gray-200 p-1 pl-4 font-semibold text-left border-b"
                          onClick={() => handleOptionClick(suggestion)}
                        >
                          {suggestion.description}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </PlacesAutocomplete>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md-w-1/2">
              <DisplayMap
                currentLocation={currentLocation}
                onLocationSelect={(lat, lng) => {
                  setCurrentLocation({ lat, lng });
                  setAddress("");
                }}
                updateFormFields={updateFormFields}
              />
            </div>
            <div className="w-full md-w-1/2 pl-4 mt-4">
              <div className="mb-4">
                <div className="text-left mb-1 ml-6">Full Address</div>
                <label htmlFor="fa" className="hidden">
                  Full Address
                </label>
                <input
                  type="text"
                  id="fa"
                  value={address}
                  className="w-80 border bg-gray-100 rounded px-2 py-1 mb-4"
                  placeholder="Type Address here"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <div className="text-left mb-1 ml-6">City</div>
                <label htmlFor="c" className="hidden">
                  City
                </label>
                <input
                  type="text"
                  id="c"
                  value={city}
                  className="w-80 border bg-gray-100 rounded px-2 py-1 mb-4"
                  placeholder="Type City here"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <div className="text-left mb-1 ml-6">
                  Apartment Number (Optional)
                </div>
                <label htmlFor="an" className="hidden">
                  Apartment Number (Optional)
                </label>
                <input
                  type="text"
                  id="an"
                  className="w-80 border bg-gray-100 rounded px-2 py-1 mb-4"
                  placeholder="Type Apartment Number here"
                  onChange={handleApartmentNumberChange}
                />
              </div>
              <div className="mb-4 text-center mt-2">
                <div className="text-center mb-1 ">Address Type</div>
                <label className="block mb-1 hidden">Address Type</label>
                <button
                  className={`w-32 px-5 py-1 rounded-full mr-4 border ${
                    type && "bg-indigo-100 text-indigo-500 border-indigo-500"
                  }`}
                  onClick={() => setType(true)}
                >
                  Home
                </button>
                <button
                  className={`w-32 px-5 py-1 rounded-full mr-4 border ${
                    !type && "bg-indigo-100 text-indigo-500 border-indigo-500"
                  }`}
                  onClick={() => setType(false)}
                >
                  Other
                </button>
              </div>

              <button
                className="bg-indigo-500 w-80 mx-auto hover-bg-indigo-700 text-white py-2 px-3 rounded mt-16 ml-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
