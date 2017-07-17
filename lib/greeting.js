
function greeting(name) {
    name = name || 'stranger';

    return `Hello ${name}`;
}

module.exports = greeting;