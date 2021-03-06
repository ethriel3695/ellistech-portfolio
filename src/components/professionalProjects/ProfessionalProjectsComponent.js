import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { container, child } from './styles.css';

const ProfessionalProjectsComponent = (props) => {
  const repositories = props.repos;
  const education = props.personalInfo[0].education;
  const tags = props.tags[0];
  const workExperience = props.personalInfo[0].workExperience;
    return (
    <div className='w3-twothird'>
      <div className='w3-container w3-card w3-white w3-margin-bottom'>
        <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-github fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>{`Github Repositories`}</h2>
        {repositories.map((repo, index) => {
          let pushedDate = repo.pushed_at.split('T', 1);
          return (
          <div className='w3-container' key={`${repo.Id}(${index})`}>
            <h5 className='w3-opacity'><a href={repo.html_url} target='_blank'><b>{repo.name}</b></a></h5>
            <p className='w3-text-teal'><strong>{`Latest Push Date:`}</strong></p>
            <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>{`${pushedDate}`}</h6>
            <p>{repo.description}</p>
             <div className={container}>
              {tags.map((tagsObject) =>
                {
                  return tagsObject.names.map((tag, index) => {
                    console.log(tag);
                return (
                  <span className={child} key={`(${index})`}>{tag}</span>
                )
              })})}
              </div>
            <hr />
          </div>
        )})}
        <p className='w3-text-teal'><a href='https://github.com/ethriel3695?tab=repositories' target='_blank'><strong>{`More Repositories`}</strong></a></p>
      </div>
      <div className='w3-container w3-card w3-white w3-margin-bottom'>
        <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>{`Education`}</h2>
        {education.map((learning, index) => {
          return (
        <div className='w3-container' key={`${learning.Id}(${index})`}>
          <h5 className='w3-opacity'><b>{learning.institution}</b></h5>
          <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>{learning.date}</h6>
          <p>{learning.degree}</p>
          <p>{learning.focus}</p>
          <div className={container}>
          {learning.tags.map((tag, index) => {
            return (
              <span className={child} key={`(${index})`}>{tag}</span>
            )
          })}
          </div>
          <hr />
        </div>
        )})}
      </div>
      <div className='w3-container w3-card w3-white'>
        <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>{`Work Experience`}</h2>
        {workExperience.map((work, index) => {
          return (
        <div className='w3-container' key={`${work.Id}(${index})`}>
          <h5 className='w3-opacity'><b>{work.company}</b></h5>
          <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>{work.date}</h6>
          {work.description.map((tasks, index) => {
            return (
              <p key={`(${index})`}>{tasks}</p>
            )
          })}
          <div className={container}>
          {work.tags.map((tag, index) => {
            return (
              <span className={child} key={`(${index})`}>{tag}</span>
            )
          })}
          </div>
          <hr />
        </div>
        )})}
      </div>
    </div>
    );
  };

export default ProfessionalProjectsComponent;
