
function makeGreeting(name = 'stranger', salutation = 'hello') {
    return `${salutation} ${name}`;
}

module.exports = makeGreeting;