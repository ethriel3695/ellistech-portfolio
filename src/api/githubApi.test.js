import {expect} from 'chai';
import userInfo from './githubApi';

describe('userInfo', () => {
  it('should return an array with github profile information and repositories', (done) => {
    const user = ['ethriel3695'];

    function handleError (error) {
      console.warn(error);
      return null;
    }

    const githubProfile = userInfo(user);

    githubProfile.then(function(profile) {
      console.log(profile);
      expect(Array.isArray(profile)).to.equal(true);
      expect(profile.length > 0).to.equal(true);
    }).catch(handleError);
    done();
  });
});
