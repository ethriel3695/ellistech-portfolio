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
      expect(Array.isArray(profile) && profile.length > 0).to.equal(true);
    }).catch(handleError);
    done();
  });
});
