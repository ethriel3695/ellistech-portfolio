import axios from 'axios';

const id = process.env.YOUR_CLIENT_ID || 'YOUR_CLIENT_ID';
const secret = process.env.YOUR_SECRET_ID || 'YOUR_SECRET_ID';
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

const githubDevPreviewHeader = {
  'Content-type': 'application/vnd.github.mercy-preview+json'
};

async function getTags (user, repoName) {
  try {
    const tags = await axios.get(`https://api.github.com/repos/${user}/${repoName}/topics${params}`, {headers: {githubDevPreviewHeader}});
      return tags;
  } catch (error) {
    console.log(`Error in topic data ${error}`);
  }
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
    console.log(filteredRepos);
    const tagResults = [];
    filteredRepos.map((repo) => {
      tagResults.push(repo.name);
    })
    console.log(tagResults);
    const tags = await axios.all([getTags(user, tagResults[0])]);
    console.log(tags);

    const githubInfo = {
      profile: [profile],
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
