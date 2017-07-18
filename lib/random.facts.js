
function randomFacts() {
    var facts = {
        0: 'http is an application protocol for distributed, collaborative, and hypermedia information systems.',
        1: 'http is the foundation of data communication for the World Wide Web.',
        2: 'http uses structured text that includes logical hyperlinks between nodes containing text.'
    };

    let randomNum = Math.floor(Math.random() * 3);

    return facts[randomNum];
}

module.exports = randomFacts;