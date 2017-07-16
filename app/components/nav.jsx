const React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault(); //does not let it refresh
    var location = this.refs.search.value; //set location equal to search bar value
    var encodedLocation = encodeURIComponent(location); //encode before putting it in query
    if(location.length > 0){ // if there is location in search bar
      this.refs.search.value =''; //set it back to default
      window.location.hash = "#/?location=" + encodedLocation; //take the location to the home page
    }
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>View Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
                <ul className="menu">
                  <li>
                    <input type="search" ref="search" placeholder="Search Weather by City"/>
                  </li>
                  <li>
                    <input type="submit" className="button" value="Get Weather"/>
                  </li>
                </ul>
            </form>
        </div>
      </div>

    );
  }

})

module.exports = Nav;
