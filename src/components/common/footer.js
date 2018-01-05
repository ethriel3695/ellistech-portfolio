import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { centeredContainer } from '../sharedStyles/styles.css';

class footer extends React.Component {
  render () {
    return (
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
      </footer>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object,
//   loading: PropTypes.bool.isRequired,
// };

// function mapStateToProps (state, ownProps) {
//   return {
//     loading: state.ajaxCallsInProgress > 0,
//   };
// }

//export default connect(mapStateToProps)(App);
export default footer;
