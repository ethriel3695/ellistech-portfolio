import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileImage from '../../utils/P18.jpg';
// import { centeredContainer } from '../sharedStyles/styles.css';


const PersonalInfoComponent = (props) => {
  const profile = props.profile[0];
  let skills = props.personalInfo[0].skills;
  let yearsText = '';
  let experienceLevel = 0;
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
          <p><i className='fa fa-code fa-fw w3-margin-right w3-large w3-text-teal'/>{`Number of Public Repositories: ${profile.public_repos}`}</p>
          <p><i className='fa fa-fire fa-fw w3-margin-right w3-large w3-text-teal'/>{profile.bio}</p>
          <p><i className='fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal'/>{`(208)569-7538`}</p>
          <p><i className='fa fa-github fa-fw w3-margin-right w3-large w3-text-teal'></i><a href='https://github.com/ethriel3695' target='_blank'>{`Github`}</a></p>
          <p><i className='fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal'></i><a href='https://www.linkedin.com/in/reuben-ellis-15922895/' target='_blank'>{`LinkedIn`}</a></p>
          <hr />
          <p className='w3-large'><b><i className='fa fa-asterisk fa-fw w3-margin-right w3-text-teal'/>Skills</b></p>
          {skills.map((skill, index) => {
            if (skill.experienceLevel === 1) {
                yearsText = 'year';
                experienceLevel = 25;
              } else {
                experienceLevel = `${skill.experienceLevel}9`
                yearsText = 'years';
              }
          return (
            <div key={`${skill.id}(${index})`}>{skill.skillName}
              <div className='w3-light-grey w3-round-xlarge w3-small'>
                <div className='w3-container w3-center w3-round-xlarge w3-teal' style={{width:`${experienceLevel}%`}}>{`${skill.experienceLevel} ${yearsText}`}</div>
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

export default PersonalInfoComponent;
