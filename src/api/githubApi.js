import axios from 'axios';

const id = '30d6262f44b5ef0c15e5';
const secret = '1ec3f5b73343efe6850e55b0a664d590f2803164';
const params = `?client_id=${id}&client_secret=${secret}`;

async function getGithubProfile (username = 'ethriel3695') {
  try {
    const user = await axios.get(`https://api.github.com/users/${username}${params}`);
      return user.data;
  } catch (error) {
    console.log(`Error in profile data ${error}`);
  }
}

function getRepos (username = 'ethriel3695') {
  return axios
    .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
}

function handleError (error) {
  console.warn(error);
  return null;
}

function sortRepos ({data}) {
  return data.sort((a, b) => {
    const c = new Date(a.pushed_at);
    const d = new Date(b.pushed_at);
    return d - c;
  });
}

function filterRepos (sortedRepos) {
  const filteredRepos = sortedRepos.filter((repo, index) => (index < 3));
  return filteredRepos;
}

async function getUserData(user) {
  try {
    const data = await axios.all([getGithubProfile(user), getRepos(user)]);
    const profile = data[0];
    const repos = data[1];
    const sortedRepos = sortRepos(repos);
    const filteredRepos = filterRepos(sortedRepos);

    const githubInfo = {
      profile: profile,
      repos: filteredRepos
    };
    return githubInfo;
  } catch (error) {
      console.log(`This is an error with user data: ${error}`);
    }
  }

  export default function userInfo(user) {
    return axios.all(user.map(getUserData))
    .catch(handleError);
  }
