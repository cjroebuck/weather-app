import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, temperature, description, icon } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_temperature_min">
        Min: {temperature.min}°C
      </div>
      <div className="forecast-summary_temperature_max">
        Max: {temperature.max}°C
      </div>
      <div className="forecast-summary_description">{description}</div>
      <div className="forecast-summary_icon">{icon}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
