import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { centeredContainer } from '../sharedStyles/styles.css';

const ProfessionalProjectsComponent = (props) => {
  console.log(props.repos);
  const repositories = props.repos;
    return (
    <div className='w3-twothird'>
      <div className='w3-container w3-card w3-white w3-margin-bottom'>
        <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-github fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>Github Repositories</h2>
        {repositories.map((repo) => {
          let pushedDate = repo.pushed_at.split('T', 1);
          console.log(pushedDate);
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
    </div>
    );
  };

        // <div className='w3-container'>
        //   <h5 className='w3-opacity'><b>Web Developer / something.com</b></h5>
        //   <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>Mar 2012 - Dec 2014</h6>
        //   <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
        //   <hr />
        // </div>
        // <div className='w3-container'>
        //   <h5 className='w3-opacity'><b>Graphic Designer / designsomething.com</b></h5>
        //   <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>Jun 2010 - Mar 2012</h6>
        //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
        // </div>
    //   <div className='w3-container w3-card w3-white'>
    //     <h2 className='w3-text-grey w3-padding-16'><i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal'/>Education</h2>
    //     <div className='w3-container'>
    //       <h5 className='w3-opacity'><b>W3Schools.com</b></h5>
    //       <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>Forever</h6>
    //       <p>Web Development! All I need to know in one place</p>
    //       <hr />
    //     </div>
    //     <div className='w3-container'>
    //       <h5 className='w3-opacity'><b>London Business School</b></h5>
    //       <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>2013 - 2015</h6>
    //       <p>Master Degree</p>
    //       <hr />
    //     </div>
    //     <div className='w3-container'>
    //       <h5 className='w3-opacity'><b>School of Coding</b></h5>
    //       <h6 className='w3-text-teal'><i className='fa fa-calendar fa-fw w3-margin-right'/>2010 - 2013</h6>
    //       <p>Bachelor Degree</p><br />
    //     </div>
    //   </div>
    // </div>

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
