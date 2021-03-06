import delay from './delay';

// This file works as a web API for quick development.
const personalInfo = [{
  skills: [
    {
      id: 1,
      skillName: 'HTML',
      experienceLevel: 4
    },
    {
      id: 2,
      skillName: 'CSS',
      experienceLevel: 3
    },
    {
      id: 3,
      skillName: 'JavaScript',
      experienceLevel: 3
    },
    {
      id: 4,
      skillName: 'C#',
      experienceLevel: 2
    },
    {
      id: 5,
      skillName: 'ASP.NET MVC',
      experienceLevel: 2
    },
    {
      id: 6,
      skillName: 'Node.js',
      experienceLevel: 1
    },
    {
      id: 7,
      skillName: 'React',
      experienceLevel: 1
    },
    {
      id: 8,
      skillName: 'Redux',
      experienceLevel: 1
    },
    {
      id: 9,
      skillName: 'SQL',
      experienceLevel: 1
    }
  ],
  education: [
  {
    id: 1,
    institution: 'FreeCodeCamp',
    date: '2017 - Current',
    degree: 'Bachelor\'s of Science in Information Technology',
    focus: 'Full-Stack Web Development',
    tags: ['React', 'Redux', 'JavaScript', 'Node.js', 'APIs', 'CSS', 'HTML', 'JQuery', 'Bootstrap', 'CSS Grid', 'Flexbox']
  },
  {
    id: 2,
    institution: 'University of Phoenix',
    date: '2013 - 2016',
    degree: 'Bachelor\'s of Science in Information Technology',
    focus: 'Specialized Focus on Software Development',
    tags: ['HTML', 'CSS', 'SQL', 'C#', 'JQuery', 'C++', 'Java', 'Android', 'Web Development']
  },
  {
    id: 3,
    institution: 'Impact Training',
    date: '2013 - Current',
    degree: 'Leadership Experience',
    focus: 'Providing a safe place to allow people to grow and learn',
    tags: ['Communication', 'Leadership', 'Teamwork']
  }],
  workExperience: [
  {
    id: 1,
    company: 'CurriQunet',
    date: '01/30/2017 - Current',
    description: ['Write SQL to manipulate applications for the client.', 'Maintain C# applications and adding features for clients'],
    tags: ['C#', 'ASP.NET MVC', 'T-SQL', 'Oracle-SQL Conversion']
  },
  {
    id: 2,
    company: 'Mercury Inc.',
    date: '02/12/2016 - 01/27/2017',
    description: ['Wrote applications to interact with hardware such as the Sun Systems temperature chamber',
      'Modified services to update tens of thousands of shipping orders to work in Microsoft Azure',
      'Created API calls to communicate with charts, maps, Google, FedEx, USPS, and UPS',
      'Wrote Code in various languages including: C#, SQL, JavaScript',
      'Used the ASP.NET MVC framework to create web applications',
      'Used JQuery and the Bootstrap framework for design',
      'Designed technical documentation for various services: Microsoft Azure, GE’s Predix'],
    tags: ['C#', 'ASP.NET MVC', '.NetCore', 'T-SQL', 'JavaScript', 'Node.js', 'Ajax', 'Azure']
  }]
}];

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
