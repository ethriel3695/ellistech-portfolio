import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const secret = 'YOUR_SECRET_ID';
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

function filterRepos ({data}) {
  // const filteredRepos = repos.reduce(function(memo, repo) {
  //   if (repo.pushed_at > '2017-12-31T21:56:35Z') {
  //     memo.push({
  //       name: repo.name,
  //       url: repo.url,
  //       push: repo.pushed_at
  //     });
  //   }
  //   return memo;
  // }, []);
  const filteredRepos = data.filter(function(repo) {
    return repo.pushed_at > '2017-12-31T21:56:35Z';
  }).map(function(repo) {
    return {
      name: repo.name,
      url: repo.url,
      pushedDate: repo.pushed_at
    };
  });
  }

async function getUserData(user) {
  try {
    const data = await axios.all([getGithubProfile(user), getRepos(user)]);
    const profile = data[0];
    const repos = data[1];

    return {
      profile: profile,
      repos: filterRepos(repos)
    };
  } catch (error) {
      console.log(`This is an error with user data: ${error}`);
    }
  }

  export default function userInfo (user) {
    return axios.all(user.map(getUserData))
    .catch(handleError);
  }
