import _ from "lodash";

const data = [
  {
    username: 'Andres',
    role: 'admin'
  },
  {
    username: 'Sarah',
    role: 'user'
  },
  {
    username: 'Diana',
    role: 'user'
  },
  {
    username: 'Hugo',
    role: 'costumer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
