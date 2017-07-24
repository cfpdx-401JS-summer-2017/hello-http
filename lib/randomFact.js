function randomFact () {
    function randomNum(first, last) {
        return Math.floor(Math.random() * (last - first + 1)) + first;
    }
    let chosenNumber = randomNum(1,3);
    if(chosenNumber == 1) return 'An HTTP session is a sequence of network request-response transactions. An HTTP client initiates a request by establishing a Transmission Control Protocol (TCP) connection to a particular port on a server';
    else if (chosenNumber == 2) return 'The first version of the protocol had only one method, namely GET, which would request a page from a server. The response from the server was always an HTML page.';
    else if(chosenNumber == 3) return 'HTTP defines methods to indicate the desired action to be performed on the identified resource. These methods are GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, CONNECT, and PATCH';

}
module.exports = randomFact;