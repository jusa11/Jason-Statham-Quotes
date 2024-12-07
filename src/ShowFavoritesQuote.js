class ShowFavoritesQuote {
  constructor() {
    this.favoritesItem = document.querySelector('.favorites-qoutes-item');
    this.quoteText = document.querySelector('.quotes-content-text');
    this.allDeleteBtn = document.querySelector('.delete-btn');
    this.favoritesQuotes = [];
  }

  showFavoriteCard(qoute) {
    this.favoritesQuotes.push(qoute);
    this.createFavoriteCard(qoute);
  }

  hideFavoriteCard(qoute) {
    const toSortQuotes = this.favoritesQuotes.filter((q) => q.id !== qoute.id);
    this.favoritesQuotes = toSortQuotes;

    const cardQuote = document.querySelector(
      `.favorites-qoute[data-qoute-id = '${qoute.id}']`
    );
    cardQuote.remove();
  }

  createFavoriteCard(qoute) {
    const favoritesQuote = document.createElement('div');
    favoritesQuote.classList.add('favorites-qoute');
    favoritesQuote.setAttribute('data-qoute-id', qoute.id);
    favoritesQuote.innerHTML = `${qoute.text} (${qoute.author}) <span class="remove-btn">★</span>`;
    this.favoritesItem.prepend(favoritesQuote);
  }

  removeCardQuoteHandler() {
    // удаляет карточку по клику на нее
    if (!this.favoritesItem.hasAttribute('data-handler-initialized')) {
      this.favoritesItem.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
          const card = event.target.parentElement;
          // По какой именно цитате кликнули
          const quoteId = +card.getAttribute('data-qoute-id');
          const qoute = this.favoritesQuotes.find((q) => q.id === quoteId);
          this.hideFavoriteCard(qoute);
        }
      });
    }
    // удаляет все карточки
    this.allDeleteBtn.addEventListener('click', () => {
      const cards = Array.from(document.querySelectorAll('.favorites-qoute'));
      if (cards) {
        cards.forEach((card) => {
          card.remove();
          this.favoritesQuotes.splice(0, this.favoritesQuotes.length);
        });
      }
    });
  }
}

export default ShowFavoritesQuote;
