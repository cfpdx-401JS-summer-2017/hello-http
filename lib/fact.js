function giveFact() {
    const fact1 = 'GET, POST, PUT, PATCH, and DELETE are oft used HTTP methods.';
    const fact2 = 'You can use HTTP methods to map CRUD operations to HTTP requests.';
    const fact3 = 'An HTTP Status Code of 4XX indicates a client-side error.';
    const facts = [fact1, fact2, fact3];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    return randomFact;
}

module.exports = giveFact;