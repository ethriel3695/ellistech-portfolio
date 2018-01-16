import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { centeredContainer } from '../sharedStyles/styles.css';

const ProfessionalProjectsComponent = (props) => {
  const repositories = props.repos;
  console.log(props);
  console.log(props.personalInfo);
  const workExperience = props.personalInfo[0].workExperience;
  const education = props.personalInfo[0].education;
    return (
    <div className='w3-twothird'>
      <div className='w3-container w3-card w3-white w3-margin-bottom'>
        <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-github fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>Github Repositories</h2>
        {repositories.map((repo) => {
          let pushedDate = repo.pushed_at.split('T', 1);
          return (
          <div className='w3-container'>
            <h5 className='w3-opacity'><a href={repo.html_url} target='_blank'><b>{repo.name}</b></a></h5>
            <p className='w3-text-teal'><strong>Latest Push Date:</strong></p>
            <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>{`${pushedDate}`}</h6>
            <p>{repo.description}</p>
            <span style={{backgroundColor: '#009688', color: '#ffffff', padding: 5}}>{repo.language}</span>
            <hr />
          </div>
        )})}
      </div>
      <div className='w3-container w3-card w3-white'>
        <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>Education</h2>
        {education.map((learning) => {
          return (
        <div className='w3-container'>
          <h5 className='w3-opacity'><b>{learning.institution}</b></h5>
          <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>{learning.date}</h6>
          <p>{learning.degree}</p>
          <p>{learning.focus}</p>
          <p>{learning.tags}</p>
          <hr />
        </div>
        )})}
      </div>
    </div>
    );
  };

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
export default ProfessionalProjectsComponent;
