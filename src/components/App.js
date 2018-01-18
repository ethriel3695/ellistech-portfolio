import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../actions/repositoryActions';
import * as personalInfoActions from '../actions/personalInfoActions';
// import { centeredContainer } from '../sharedStyles/styles.css';
import { PersonalInfoComponent } from '../components';
import { ProfessionalProjectsComponent } from '../components';
import { footer } from '../components';

class App extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      repos: Object.assign({}, this.props.repos),
      personalInfo: Object.assign({}, this.props.personalInfo)
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    if (this.props.repos.pushed_at !== nextProps.repos[0].pushed_at) {
      console.log('is this happening');
      this.setState({repos: Object.assign({}, nextProps.repos)});
    }
    console.log(nextProps.personalInfo);
    if (nextProps.personalInfo) {
      if(nextProps.personalInfo.length > 0) {
        this.setState({personalInfo: Object.assign({}, nextProps.personalInfo)});
      }
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
    const personalInfo = this.props.personalInfo;
    if (repos && personalInfo.length > 0) {
      return (
      <div className='w3-row-padding'>
      <PersonalInfoComponent profile={profile} personalInfo={personalInfo}/>
      <ProfessionalProjectsComponent repos={repos} personalInfo={personalInfo}/>
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
  personalInfo: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
  if (state.repos.length === 0 || state.repos === undefined) {
    const repos = [{id: 0, name: 'waiting on API Call', pushed_at: '2018-01-10T21:42:10Z'
    , description: 'This will be filled with a description of a github repository', html_url: 'https://github.com', language: 'language' }];
    const profile = [{id: 0, login: 'ethriel3695', html_url: 'https://www.google.com'}];
    const personalInfo = [{
      skills: [{
        id: 0,
        skillName: 'JavaScript',
        experienceLevel: 3
      }],
      education: [{
        id: 0,
        institution: 'FreeCodeCamp',
        date: '2017 - Current',
        degree: 'Bachelor\'s of Science in Information Technology',
        focus: 'Full-Stack Web Development',
        tags: ['React, Redux, Responsive Design, JavaScript, Node.js, APIs, CSS, HTML, JQuery, Bootstrap, CSS Grid, Flexbox']
      }],
      workExperience: [{
        id: 0,
        company: 'CurriQunet',
        date: '01/30/2017 - Current',
        description: 'Write SQL to manipulate applications for the client. Maintain C# application and adding features for clients',
        tags: ['C#', 'ASP.NET MVC', 'T-SQL', 'Oracle-to-SQL Conversion']
      }]
    }];
    return {
      repos: repos,
      profile: profile,
      personalInfo: personalInfo
    }
  } else {
    return {
      repos: state.repos[0].repos,
      profile: state.repos[0].profile,
      personalInfo: state.personalInfo
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
    actions: bindActionCreators({...repoActions, ...personalInfoActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
