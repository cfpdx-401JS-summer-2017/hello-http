const greeting = {};

greeting.greet = function(response) {
    if (!response[2]) return 'Hello Stranger';
    if (response[2]) return `Hello ${response[2]}`;

};


module.exports = greeting;