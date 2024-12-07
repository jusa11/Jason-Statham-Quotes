// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
class UpdateFavoriteButton {
  constructor(showQuote, showFavoritesQuote) {
    this.showQuote = showQuote;
    this.favoritesItem = showFavoritesQuote.favoritesItem;
    this.favoritesBtn = showQuote.favoritesBtn;
    this.currentQuoteID = +showQuote.quoteText.getAttribute('data-qoute-id');
  }

  initObserver() {
    const observer = new MutationObserver(() => {
      this.updateStateBtn();
    });

    observer.observe(this.favoritesItem, { childList: true });
  }

  updateStateBtn() {
    this.currentQuoteID =
      +this.showQuote.quoteText.getAttribute('data-qoute-id');

    const isFavorite = [...this.favoritesItem.children].some(
      (el) => +el.getAttribute('data-qoute-id') === this.currentQuoteID
    );

    if (isFavorite) {
      this.favoritesBtn.classList.add('active');
    } else {
      this.favoritesBtn.classList.remove('active');
    }
  }
}

export default UpdateFavoriteButton;

// реализация смены цвета кнопки через функцию updateFavoriteButton
/* const updateFavoriteButton = (showQuote, showFavoritesQuote) => {
  const currentQuote = showQuote.currentQuote;
  const favoritesQuote = showFavoritesQuote.favoritesQuotes;
  const btn = showQuote.favoritesBtn;

  if (favoritesQuote !== null) {
    favoritesQuote.find((q) => {
      return btn.classList.toggle('active', q.id === currentQuote.id);
    });
  }
};

export default updateFavoriteButton;
 */
