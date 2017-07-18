
function greeting(name, salutation) {
    name = name || 'stranger';
    salutation = salutation || 'hello';
    return [properCase(salutation), properCase(name)].join(' ');
}


// helper function
// https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function properCase(string) {
    string = string.toLowerCase();
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

module.exports = greeting;