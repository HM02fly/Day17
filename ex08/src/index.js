// Lodash

const _ = require('lodash');

// only change code below this line
const users = [
  // users nested array with four objects starts here
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    gender: 'male',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 5,
    gender: 'female',
  },
  {
    firstName: 'Jim',
    lastName: 'Carrey',
    age: 54,
    gender: 'male',
  },
  {
    firstName: 'Kate',
    lastName: 'Winslet',
    age: 40,
    gender: 'female',
  },
];
// users nested array with four objects ends here
const getUsers = () => {
  // getUsers function - list of users starts here
  var output = '';
  for (let i = 0; i < users.length; i++) {
    output += `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
  }
  console.log(output);
  return output;
};

// getUsers function - list of users ends here
function findUser(lastName, gender) {
  try {
    var user = _.find(users, { 'lastName': lastName, 'gender': gender });
    var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;

    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    console.log("Cannot read property 'firstName' of undefined"); // Change this line
    return "Cannot read property 'firstName' of undefined";
  }
}
// findUser(lastName, gender) function ends here
// Only change code above this line

getUsers();

findUser('Meho', 'male'); // Change this line

module.exports = findUser;
