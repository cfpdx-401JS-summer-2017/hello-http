module.exports = function getFacts() {
  const httpFacts =
    ['No one has ever used HTTP to fly a plane and lived to tell about it.',
      'In some Scandinavian countries children start school days with a hearty meal of HTTP.',
      'In recent years, evidence of HTTP has been discovered in the Marianas Trench at a depth of more than 9000 meters.',
      'Though it can be tasty and filling, HTTP has no real nutritional value.'
    ]

  let num = -1;
  const floor = httpFacts.length - 1;

  const factIndex = (min, max) => {
    min = Math.ceil(0);
    max = Math.floor(floor);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  factIndex(0, 3);
  return httpFacts[num];

}