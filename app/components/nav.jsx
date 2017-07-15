const React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = (props) => {
  return(
    <div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br></br>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br></br>
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>View Examples</Link><br></br>
    </div>
  )}


module.exports = Nav;
