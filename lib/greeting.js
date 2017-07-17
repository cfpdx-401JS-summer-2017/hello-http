const greeting = {};

greeting.greet = function(response) {
    if (!response[2]) return 'Hello Stranger';

};


module.exports = greeting;