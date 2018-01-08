import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileImage from '../../utils/P18.jpg';
// import { centeredContainer } from '../sharedStyles/styles.css';

const PersonalInfoComponent = () => {
    return (
    <div className='w3-third'>

      <div className='w3-white w3-text-grey w3-card-4'>
        <div className='w3-display-container'>
          <img src={ProfileImage} style={{width:450, height: 350}} alt='Avatar' />
          <div className='w3-display-bottomleft w3-container w3-text-black'>
            <h2 id='app'>{`Reuben Ellis`}</h2>
          </div>
        </div>
        <div className='w3-container'>
          <p><i className='fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal' />Designer</p>
          <p><i className='fa fa-home fa-fw w3-margin-right w3-large w3-text-teal'/>London, UK</p>
          <p><i className='fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal'/>ex@mail.com</p>
          <p><i className='fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal'/>1224435534</p>
          <hr />

          <p className='w3-large'><b><i className='fa fa-asterisk fa-fw w3-margin-right w3-text-teal'/>Skills</b></p>
          <p>Adobe Photoshop</p>
          <div className='w3-light-grey w3-round-xlarge w3-small'>
            <div className='w3-container w3-center w3-round-xlarge w3-teal' style={{width:90}}>90%</div>
          </div>
          <p>Photography</p>
          <div className='w3-light-grey w3-round-xlarge w3-small'>
            <div className='w3-container w3-center w3-round-xlarge w3-teal' style={{width:80}}>
              <div className='w3-center w3-text-white'>80%</div>
            </div>
          </div>
          <p>Illustrator</p>
          <div className='w3-light-grey w3-round-xlarge w3-small'>
            <div className='w3-container w3-center w3-round-xlarge w3-teal' style={{width:75}}>75%</div>
          </div>
          <p>Media</p>
          <div className='w3-light-grey w3-round-xlarge w3-small'>
            <div className='w3-container w3-center w3-round-xlarge w3-teal' style={{width:50}}>50%</div>
          </div>
          <br />

          <p className='w3-large w3-text-theme'><b><i className='fa fa-globe fa-fw w3-margin-right w3-text-teal'/>Languages</b></p>
          <p>English</p>
          <div className='w3-light-grey w3-round-xlarge'>
            <div className='w3-round-xlarge w3-teal' style={{height:24, width:100}}/>
          </div>
          <p>Spanish</p>
          <div className='w3-light-grey w3-round-xlarge'>
            <div className='w3-round-xlarge w3-teal' style={{height:24, width:55}}/>
          </div>
          <p>German</p>
          <div className='w3-light-grey w3-round-xlarge'>
            <div className='w3-round-xlarge w3-teal' style={{height:24, width:25}}/>
          </div>
          <br />
        </div>
      </div>
      <br />
    </div>
    );
};

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
