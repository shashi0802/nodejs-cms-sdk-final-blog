const cstack = require('contentstack');
var config = require('../config/default');
// Initialize the Contentstack Stack
const Stack = cstack.Stack(config.contentstack.api_key,
    config.contentstack.access_token,
    config.contentstack.environment);

module.exports = Stack;