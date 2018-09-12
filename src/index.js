module.exports = function getZerosCount(number) {
  // your implementation
  let zerosCount = 0;

  for (let i = 5; i <= number; i++) {
    let iCopy = i;

    while (iCopy % 5 === 0) {
      iCopy /= 5;
      zerosCount++;
    }
  }

  return zerosCount;
}
