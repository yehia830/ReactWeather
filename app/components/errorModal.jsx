const React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return{
      title:'Error'
    }
  },
  propTypes:{
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  //automatically called by React when rendered
  componentDidMount:function () {
    var {title,message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close="">
              Okay
            </button>
          </p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup)); //jquery selector and react libary to grab the div and tostring it
    $(ReactDOM.findDOMNode(this)).html($modal); //takes components and returns dom node where it lives

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open(); //foundation opens modal and messes with react's dom 
  },
    render: function () {

      return(
        <div>
        </div>
      );
    }

});

module.exports = ErrorModal;
