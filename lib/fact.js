const factObj = {
    factOne: 'HTTP stands for Hypertext Transfer Protocol',
    factTwo: 'The most common HTTP verbs are GET, PUT, POST and DELETE',
    factThree: 'The request is made up of the URL and HTTP verb, while the response contains the status code and message body.'
};

factObj.arrayOfFacts = [factObj.factOne, factObj.factTwo, factObj.factThree];

factObj.getRandomFact = function () {
    let randomNum = Math.floor(Math.random() * factObj.arrayOfFacts.length) + 1;

    return factObj.arrayOfFacts[randomNum];

};

module.exports = factObj;