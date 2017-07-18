const factArray = [
    'FACT: REST (Representational State Transfer) was introduced and defined in 2000 by Roy Fielding in his doctoral dissertation.',
    'FACT: Postman has an intuitive user interface to send requests, save responses, add tests, and create workflows.',
    'FACT: URLs have a simple structure that consists of the following components: protocol, host, port, resource path, query.'
];

function fact() {
    return factArray[Math.floor(Math.random() * factArray.length)];
}

module.exports = fact;