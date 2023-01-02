const user = require('./node-modules-user.js');

const me = user.me,
    sarah = user.sarah,
    printUser = user.printUser;

printUser(me);
printUser(sarah);