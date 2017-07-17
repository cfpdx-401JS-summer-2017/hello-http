function greet(salutation = 'Hello', name = 'Stranger') {
    return [salutation, name].join(' ');
}

module.exports = greet;