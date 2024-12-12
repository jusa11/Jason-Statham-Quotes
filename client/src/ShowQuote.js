import GenerateQuote from './GenerateQuote.js';

class ShowQuote {
  constructor() {
    this.quotesContent = document.querySelector('.quotes-content');
    this.quoteText = document.querySelector('.quotes-content-text');
    this.quoteAuthor = document.querySelector('.quotes-content-author');
    this.generateBtn = document.querySelector('.generate-btn');
    this.favoritesBtn = document.querySelector('.favorites-btn');
    this.apiBtn = document.querySelector('.api-btn');
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
    console.log(joke);
    this.quoteText.textContent = joke.formatText();
    this.quoteText.setAttribute('data-qoute-id', joke.id);
    this.quoteAuthor.textContent = joke.formatAuthor();
  }

  /* displayJoke() {
    GenerateQuote.getRandomJokeAPI().then((joke) => {
      this.quoteText.textContent = joke.formatText();
      this.quoteText.setAttribute('data-qoute-id', joke.id);
      this.quoteAuthor.textContent = joke.formatAuthor();
    });
  } */

  generateJoke() {
    this.apiBtn.addEventListener('click', () => {
      console.log('click');
      return this.displayJoke();
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
