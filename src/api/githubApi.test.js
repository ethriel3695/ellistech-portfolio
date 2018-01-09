import {expect} from 'chai';
import userInfo from './githubApi';

describe('userInfo', () => {
  it('should return an object with github profile information and repositories', (done) => {
    const user = ['ethriel3695'];

    const githubProfileInfo = {
        login: 'ethriel3695',
        id: 12070791,
        avatar_url: 'https://avatars1.githubusercontent.com/u/12070791?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ethriel3695',
        html_url: 'https://github.com/ethriel3695',
        followers_url: 'https://api.github.com/users/ethriel3695/followers',
        following_url: 'https://api.github.com/users/ethriel3695/following{/other_user}',
        gists_url: 'https://api.github.com/users/ethriel3695/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/ethriel3695/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ethriel3695/subscriptions',
        organizations_url: 'https://api.github.com/users/ethriel3695/orgs',
        repos_url: 'https://api.github.com/users/ethriel3695/repos',
        events_url: 'https://api.github.com/users/ethriel3695/events{/privacy}',
        received_events_url: 'https://api.github.com/users/ethriel3695/received_events',
        type: 'User',
        site_admin: false,
        name: 'Reuben Ellis',
        company: null,
        blog: '',
        location: 'Rigby, ID',
        email: null,
        hireable: true,
        bio: 'I love coding with every fiber of my being and my goal is to use my passion for software to make people\'s lives easier.',
        public_repos: 25,
        public_gists: 0,
        followers: 1,
        following: 1,
        created_at: '2015-04-22T15:52:37Z',
        updated_at: '2018-01-04T17:09:27Z'
    };

    function handleError (error) {
      console.warn(error);
      return null;
    }

    const githubProfile = userInfo(user);

    githubProfile.then(function(profile) {
      expect(Array.isArray(profile)).to.equal(true);
      expect(profile.length > 0).to.equal(true);
    }).catch(handleError);
    done();
  });
});
