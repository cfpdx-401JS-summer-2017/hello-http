
function fact() {
    let facts = [
        'HTTP stands for Hypertext Transfer Protocol.',
        'The term hypertext was coined by Ted Nelson in 1965.',
        'HTTP is an application layer protocol.'
    ];
    let randomNum = Math.floor(Math.random() * facts.length );
    return facts[randomNum];
}

module.exports = fact;
