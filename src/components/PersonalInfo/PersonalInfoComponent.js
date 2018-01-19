import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileImage from '../../utils/P18.jpg';
// import { centeredContainer } from '../sharedStyles/styles.css';


const PersonalInfoComponent = (props) => {
  const profile = props.profile[0];
  let skills = props.personalInfo[0].skills;
  let yearsText = '';
  // console.log(profile);
  // console.log(personalInfo);
    return (
    <div className='w3-third'>
      <div className='w3-white w3-text-grey w3-card-4'>
        <div className='w3-display-container'>
          <img src={ProfileImage} style={{width:'100%', height: '100%'}} alt='Avatar' />
        </div>
        <div className='w3-container'>
          <p><i className='fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal' />Software Engineer</p>
          <p><i className='fa fa-id-badge fa-fw w3-margin-right w3-large w3-text-teal'/>{profile.name}</p>
          <p><i className='fa fa-building fa-fw w3-margin-right w3-large w3-text-teal'/>{profile.company}</p>
          <p><i className='fa fa-home fa-fw w3-margin-right w3-large w3-text-teal'/>{profile.location}</p>
          <p><i className='fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal'/>{`ethriel3695@gmail.com`}</p>
          <p><i className='fa fa-code fa-fw w3-margin-right w3-large w3-text-teal'/>{`Number of Repositories: ${profile.public_repos}`}</p>
          <p><i className='fa fa-fire fa-fw w3-margin-right w3-large w3-text-teal'/>{profile.bio}</p>
          <p><i className='fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal'/>{`(208)569-7538`}</p>
          <hr />
          <p className='w3-large'><b><i className='fa fa-asterisk fa-fw w3-margin-right w3-text-teal'/>Skills</b></p>
          {skills.map((skill, index) => {
            if (skill.experienceLevel === 1) {
                yearsText = 'year';
              } else {
                yearsText = 'years';
              }
          return (
            <div key={`${skill.id}(${index})`}>{skill.skillName}
              <div className='w3-light-grey w3-round-xlarge w3-small'>
                <div className='w3-container w3-center w3-round-xlarge w3-teal' style={{width:`${skill.experienceLevel}9%`}}>{`${skill.experienceLevel} ${yearsText}`}</div>
              </div>
            </div>
          )})}
        <br />
        </div>
      </div>
      <br />
    </div>
    );
};

// <p className='w3-large w3-text-theme'><b><i className='fa fa-globe fa-fw w3-margin-right w3-text-teal'/>Languages</b></p>
//           <p>English</p>
//           <div className='w3-light-grey w3-round-xlarge'>
//             <div className='w3-round-xlarge w3-teal' style={{height:24, width:350}}/>
//           </div>
//           <p>Italian</p>
//           <div className='w3-light-grey w3-round-xlarge'>
//             <div className='w3-round-xlarge w3-teal' style={{height:24, width:275}}/>
//           </div>
//           <br />

// App.propTypes = {
//   children: PropTypes.object,
//   loading: PropTypes.bool.isRequired,
// };

// function mapStateToProps (state, ownProps) {
//   return {
//     loading: state.ajaxCallsInProgress > 0
//   };
// }

// export default connect(mapStateToProps)(PersonalInfoComponent);
export default PersonalInfoComponent;
