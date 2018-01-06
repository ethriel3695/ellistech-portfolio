import delay from './delay';

// This file works as a web API for quick development.
const personalInfo = [
  {
    id: 'reuben-ellis',
    firstName: 'Reuben',
    lastName: 'Ellis'
  },
  {
    id: 'jessica-ellis',
    firstName: 'Jessica',
    lastName: 'Ellis'
  },
  {
    id: 'alex-ellis',
    firstName: 'Alex',
    lastName: 'Ellis'
  }
];

class PersonalInfoAPI {
  static getAllPersonalInfo () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], personalInfo));
      }, delay);
    });
  }
}

export default PersonalInfoAPI;
