import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../actions/repositoryActions';
// import { centeredContainer } from '../sharedStyles/styles.css';
import { PersonalInfoComponent } from '../components';
import { ProfessionalProjectsComponent } from '../components';
import { footer } from '../components';

class App extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      repos: Object.assign({}, this.props.repos)
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    if (this.props.repos.pushed_at !== nextProps.repos[0].pushed_at) {
      this.setState({course: Object.assign({}, nextProps.repos)});
    }
  }

  // componentDidMount() {
  //   this.setState = {
  //     repos: this.props.repos
  //   }
  // }


  render () {
    const repos = this.props.repos;
    const profile = this.props.profile;
    // console.log('help');
    // console.log(repos);
    if (repos) {
      return (
      <div className='w3-row-padding'>
      <PersonalInfoComponent profile={profile}/>
      <ProfessionalProjectsComponent repos={repos}/>
      </div>
    );
    } else {
      return (
        <div className='w3-row-padding'>{`Waiting on API's`}</div>
      )
    }

  }
}
App.propTypes = {
  children: PropTypes.object,
  repos: PropTypes.array.isRequired,
  profile: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
  if (state.repos.length === 0 || state.repos === undefined) {
    const repos = [{id: 0, name: 'waiting on API Call', pushed_at: '2018-01-10T21:42:10Z'
    , description: 'This will be filled with a description of a github repository', html_url: 'https://github.com', language: 'language' }];
    const profile = [{id: 0, login: 'ethriel3695', html_url: 'https://www.google.com'}];
    return {
      repos: repos,
      profile: profile
    }
  } else {
    // console.log(state.repos[0]);
    return {
      repos: state.repos[0].repos,
      profile: state.repos[0].profile
    };
  };
};

// function mapStateToProps (state, ownProps) {
//   return {
//     loading: state.ajaxCallsInProgress > 0
//   };
// }

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(repoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
