import ShowQuote from './ShowQuote.js';
import ShowFavoritesQuote from './ShowFavoritesQuote.js';
import UpdateFavoriteButton from './utils/updateFavoriteButton.js';

class App {
  init() {
    const showQuote = new ShowQuote();
    const showFavoritesQuote = new ShowFavoritesQuote();
    const updateFavoriteButton = new UpdateFavoriteButton(
      showQuote,
      showFavoritesQuote
    );

    window.addEventListener('load', () => {
      showQuote.displayQuote();
      showQuote.generateNewQuote(updateFavoriteButton);
      showQuote.addToFavorites(showFavoritesQuote);
      showFavoritesQuote.removeCardQuoteHandler();
      updateFavoriteButton.initObserver();
    });
  }
}

export default App;
