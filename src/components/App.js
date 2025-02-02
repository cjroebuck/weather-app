import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ forecasts, location }) {
  const { city, country } = location;
  return (
    <div className="app">
      <LocationDetails city={city} country={country} />
      {forecasts.map((forecast) => {
        return (
          <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            temperature={forecast.temperature}
            description={forecast.description}
            icon={forecast.icon}
          />
        );
      })}
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
