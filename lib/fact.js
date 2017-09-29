const fact1 = 'cheese is good';
const fact2 = 'Andrew is spicy';
const fact3 = 'Joe is a good boy';

const facts = [fact1, fact2, fact3];

function rollFact(){
    return facts[Math.floor(Math.random()*3)];
}

module.exports = {
    rollFact,
    facts
};