import MathRandom from './utils/MathRandom.js';
import qoutes from '../data/qoutes.js';
import Quote from './Quote.js';

class GenerateQuote {
  static getRandomQuote() {
    const randomQute = qoutes[MathRandom.generateRandomNum(qoutes.length)];
    const { text, author, id } = randomQute;
    return new Quote(text, author, id);
  }

  static getRandomJokeAPI() {
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { joke, category, id } = data;
        return new Quote(joke, category, id);
      })
  }
}

export default GenerateQuote;
