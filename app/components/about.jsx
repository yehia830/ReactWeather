const React = require('react');

// var About = React.createClass({
//   render: function() {
//w
//   }
// });

var About = (props) => {
  return (
    <div className="text-center">
        <h1 className="text-center page-title">About</h1>
            <p className="callout primary large">
              This is a weather application bulit on React while using the the Open Weather Map API.
            </p>
            <p>
              Here are some of the tools I used:
            </p>
            <ul className="text-left">
              <li>
                <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript framework used.
              </li>
              <li>
                <a href="https://openweathermap.org/api">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
              </li>
            </ul>
            <a href="https://github.com/yehia830" className="callout secondary small">Checkout out my Github for more projects</a>

    </div>

  )
};


module.exports = About;
