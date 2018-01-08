import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { centeredContainer } from '../sharedStyles/styles.css';
import { PersonalInfoComponent } from '../components';
import { ProfessionalProjectsComponent } from '../components';
import { footer } from '../components';

class App extends React.Component {
  render () {
    console.log('help');
    console.log(this.props.children);
    return (
      <div className='w3-row-padding'>
      <PersonalInfoComponent />
      <ProfessionalProjectsComponent />
      </div>
    );
  }
}

// <PersonalInfoComponent />
// <ProfessionalProjectsComponent />
// <footer/>

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
