import ShowQuote from './ShowQuote.js';

class App {
  init() {
    const showQuote = new ShowQuote();

    window.addEventListener('load', () => {
      showQuote.displayQuote();
    });
  }
}

export default App;
