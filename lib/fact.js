
function fact() {
    let facts = [
        'HTTP stands for Hypertext Transfer Protocol.',
        'The term hypertext was coined by Ted Nelson in 1965.',
        'HTTP is an application layer protocol.',
        'An HTTP session is a sequence of network request-response transactions.',
        'An HTTP client initiates a request by establishing a Transmission Control Protocol (TCP) connection to a particular port on a server.',
        'An HTTP client typically uses port 80, occasionally port 8080.'
    ];
    let randomNum = Math.floor(Math.random() * facts.length );
    return facts[randomNum];
}

module.exports = fact;
