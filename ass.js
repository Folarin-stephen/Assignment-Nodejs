//Print current working directory
const path = require('path');
const os= require('os')
const process = require('process')

const cwd = path.resolve();

console.log(cwd);

//Print out the seperator of a given path fie

const seperator = path.sep;
console.log(seperator);

// Print Extension Name
const extName = path.extname('C:\Users\STEVE PC\Desktop\Nodejs\Assignment\package.json');
console.log(extName);

// Get the current user's details
const user = os.userInfo()
console.log(user);

// Get the current platform
const platform = os.platform()
console.log(platform)