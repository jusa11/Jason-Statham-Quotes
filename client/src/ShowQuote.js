import GenerateQuote from './GenerateQuote.js';
import Quote from './Quote.js';

class ShowQuote {
  constructor() {
    this.quotesContent = document.querySelector('.quotes-content');
    this.quoteText = document.querySelector('.quotes-content-text');
    this.quoteAuthor = document.querySelector('.quotes-content-author');
    this.generateBtn = document.querySelector('.generate-btn');
    this.favoritesBtn = document.querySelector('.favorites-btn');
    this.apiBtn = document.querySelector('.api-btn');
    this.ownApiBtn = document.querySelector('.own-api-btn');
    this.currentQuote = null;
  }

  displayQuote() {
    this.currentQuote = GenerateQuote.getRandomQuote();
    this.quoteText.textContent = this.currentQuote.formatText();
    this.quoteText.setAttribute('data-qoute-id', this.currentQuote.id);
    this.quoteAuthor.textContent = this.currentQuote.formatAuthor();
  }

  async displayJoke() {
    const joke = await GenerateQuote.getRandomJokeAPI();
    this.quoteText.textContent = joke.formatText();
    this.quoteText.setAttribute('data-qoute-id', joke.id);
    this.quoteAuthor.textContent = joke.formatAuthor();
  }

  async displayOwnQuoteAPI() {
    const url = 'http://localhost:3000/quotes/random-single';
    const options = { headers: { 'Content-type': 'application/json' } };

    const res = await fetch(url, options);
    const data = await res.json();

    const { text, author, id } = data;
    const newQuote = new Quote(text, author, id);
    this.quoteText.textContent = newQuote.formatText();
    this.quoteText.setAttribute('data-qoute-id', newQuote.id);
    this.quoteAuthor.textContent = newQuote.formatAuthor();
    return;
  }

  generateJoke() {
    this.apiBtn.addEventListener('click', () => {
      return this.displayJoke();
    });
  }

  generateOwnQuote() {
    this.ownApiBtn.addEventListener('click', () => {
      this.displayOwnQuoteAPI();
    });
  }

  generateNewQuote(updateFavoriteButton) {
    this.generateBtn.addEventListener('click', () => {
      this.displayQuote();
      updateFavoriteButton.updateStateBtn();
    });
  }

  addToFavorites(favorites) {
    this.favoritesBtn.addEventListener('click', () => {
      favorites.favoritesQuotes.find((q) => q.id === this.currentQuote.id)
        ? favorites.hideFavoriteCard(this.currentQuote)
        : favorites.showFavoriteCard(this.currentQuote);
    });
  }
}

export default ShowQuote;
