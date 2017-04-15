const React = require('react');

const WeatherMessage = ({temp, location}) => {
    return (
           <h2>It is currently {temp} degrees in {location}</h2>
    )
};

module.exports = WeatherMessage;