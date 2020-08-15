"use strict";
import users from "./users.js";

/*  task-01  */

const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.group("task-01");
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.groupEnd();

/*  task-02  */

console.group("task-02");
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.groupEnd();

/*  task-03  */

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((userName) => userName.name);
};
console.group("task-03");
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.groupEnd();

/*  task-04  */

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};
console.group("task-04");
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.groupEnd();

/*  task-05  */

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
console.group("task-05");
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
console.groupEnd();

/*  task-06  */

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};
console.group("task-06");
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
console.groupEnd();

/*  task-07  */

const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
console.group("task-07");
console.log(calculateTotalBalance(users)); // 20916
console.groupEnd();

/*  task-08  */

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};
console.group("task-08");
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
console.groupEnd();

/*  task-09  */

const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
console.group("task-09");
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.groupEnd();

/*  task-10  */

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, skill) => (acc = [...acc, ...skill.skills]), [])
    .filter((filterSkill, index, array) => array.indexOf(filterSkill) === index)
    .sort();
};
console.group("task-10");
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
console.groupEnd();
