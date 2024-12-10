class MathRandom {
  static lastIndex = null;

  static generateRandomNum(maxNum) {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * maxNum);
    } while (randomNum === this.lastIndex);

    this.lastIndex = randomNum;
    return randomNum;
  }
}

export default MathRandom;
