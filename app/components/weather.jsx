const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {isLoading: false} //sets default state
  },
  handleSearch: function(location) {
    var that = this;
    this.setState( //sets state
      {
      isLoading: true, //when you search for function, the loading message pops up
      errorMessage: undefined, //no error needed, it worked
      location: undefined, //set location back to null
      temp: undefined //set temp back to null
    })
    openWeatherMap.getTemp(location).then(function(temp) { //weathermap api getTemp using the location and temp passed
      that.setState(
        {location: location,
          temp: temp,
          isLoading: false
        });
    }, function(e) {
      that.setState({isLoading: false, errorMessage: e.message});
    });

  },
  componentDidMount: function() { //as soon the component is rendered

    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location)
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function (newProps) { //called when props have been changed post inital render,listen to change
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location)
      window.location.hash = "#/";
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    };
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (<ErrorModal message={errorMessage}/>)
      }
    };
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
        {renderError()}
      </div>

    )
  }
});
module.exports = Weather;
