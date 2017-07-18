const fact = {};

fact.fact1 = 'GET, POST, PUT, PATCH, and DELETE are oft used HTTP methods.';
fact.fact2 = 'You can use HTTP methods to map CRUD operations to HTTP requests.';
fact.fact3 = 'An HTTP Status Code of 4XX indicates a client-side error.';
fact.facts = [fact.fact1, fact.fact2, fact.fact3];

fact.giveFact = function() {
    const randomFact = fact.facts[Math.floor(Math.random() * fact.facts.length)];
    return randomFact;
};

module.exports = fact;