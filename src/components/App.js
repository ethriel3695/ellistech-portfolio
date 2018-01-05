import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { centeredContainer } from '../sharedStyles/styles.css';
import { PersonalInfoComponent, ProfessionalProjectsComponent, footer } from 'components';

class App extends React.Component {
  render () {
    console.log('help');
    console.log(this.props.children);
    return (
      <div>
        {this.props.children}
      </div>
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

// export default connect(mapStateToProps)(App);
export default App;
