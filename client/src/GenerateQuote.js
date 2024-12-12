import MathRandom from './utils/MathRandom.js';
import qoutes from '../data/qoutes.js';
import Quote from './Quote.js';

class GenerateQuote {
  static getRandomQuote() {
    const randomQute = qoutes[MathRandom.generateRandomNum(qoutes.length)];
    const { text, author, id } = randomQute;
    return new Quote(text, author, id);
  }

  static async getRandomJokeAPI() {
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
    const options = { headers: { 'Content-type': 'application/json' } };

    const res = await fetch(url, options);
    const data = await res.json();

    const { joke, category, id } = data;
    return new Quote(joke, category, id);
  }
}

export default GenerateQuote;
