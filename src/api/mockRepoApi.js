import delay from './delay';

const repos = [
  {
    id: 'react-creating-reusable-components',
    title: 'Creating Reusable React Components',
    watchHref: 'http://pluralsight.com/courses/react-creating-reusable-components',
    authorId: 'cory-house',
    length: '6:20',
    category: 'JavaScript'
  },
  {
    id: 'react-flux-building-applications',
    title: 'Building Applications in React and Flux',
    watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
    authorId: 'cory-house',
    length: '5:08',
    category: 'JavaScript'
  },
  {
    id: 'clean-code',
    title: 'Clean Code: Writing Code for Humans',
    watchHref: 'http://www.pluralsight.com/courses/writing-clean-code-humans',
    authorId: 'cory-house',
    length: '3:10',
    category: 'Software Practices'
  },
  {
    id: 'architecture',
    title: 'Architecting Applications for the Real World',
    watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
    authorId: 'cory-house',
    length: '2:52',
    category: 'Software Architecture'
  },
  {
    id: 'career-reboot-for-developer-mind',
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
    authorId: 'cory-house',
    length: '2:30',
    category: 'Career'
  },
  {
    id: 'react-redux-web-applications',
    title: 'Building Applications with React and Redux in ES6',
    watchHref: 'http://www.pluralsight.com/courses/react-redux-react-router-es6',
    authorId: 'cory-house',
    length: '6:13',
    category: 'JavaScript'
  }
];

class RepoApi {
  static getAllRepos () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], repos));
      }, delay);
    });
  }
}

export default RepoApi;
