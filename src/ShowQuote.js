import GenerateQuote from './GenerateQuote.js';
import Quote from './Quote.js';

class ShowQuote {
  constructor() {
    this.quotesContent = document.querySelector('.quotes-content');
    this.quoteText = document.querySelector('.quotes-content-text');
    this.quoteAuthor = document.querySelector('.quotes-content-author');
    this.generateBtn = document.querySelector('.generate-btn');
    this.favoritesBtn = document.querySelector('.favorites-btn');
    this.currentQuote = null;
  }

  displayQuote() {
    this.currentQuote = GenerateQuote.getRandomQuote();
    this.quoteText.textContent = this.currentQuote.formatText();
    this.quoteAuthor.textContent = this.currentQuote.formatAuthor();
  }
}

export default ShowQuote;
