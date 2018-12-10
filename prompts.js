module.exports = [
  {
    name: `addExample`,
    type: 'confirm',
    message: 'Add example page?',
    default: false,
    group: 'Strongly recommended',
    description: 'Adds example component to src folder',
  },
  {
    when: (response) => {
      return response.addExample;
    },
    name: `addFirestoreCredentials`,
    type: 'confirm',
    message: 'Do you want to enter your Firebase credentials now?',
    default: false,
    group: 'Recommended',
    description: 'You can enter your credentials at this step, they will be used in example component',
  },
  {
    when: (response) => {
      return response.addFirestoreCredentials;
    },
    name: `projectId`,
    type: 'input',
    message: 'Input your Firebase Project ID (you can leave it empty and configure later in example component)',
    group: 'Recommended',
  },
];