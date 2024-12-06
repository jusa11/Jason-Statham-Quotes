import MathRandom from './utils/MathRandom.js';
import qoutes from '../data/qoutes.js';
import Quote from './Quote.js';

class GenerateQuote {
  static getRandomQuote() {
    const randomQute = qoutes[MathRandom.generateRandomNum(qoutes.length)];
    const { text, author, id } = randomQute;
    return new Quote(text, author, id);
  }
}

export default GenerateQuote;
