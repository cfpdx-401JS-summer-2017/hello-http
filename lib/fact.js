const fact1 = 'The moon is a hologram';
const fact2 = 'There is a 100,000 reward if you can provide evidence that the moon is not a hologram';
const fact3 = 'Will watched a bunch of space conspiracy videos';

const facts = [fact1, fact2, fact3];

function rollFact() {
    return facts[Math.floor(Math.random()*3)];
}

module.exports = {rollFact, facts};