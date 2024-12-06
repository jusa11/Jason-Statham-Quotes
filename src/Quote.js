class Quote {
  constructor(text, author, id) {
    this.text = text;
    this.author = author;
    this.id = id;
  }

  formatText() {
    return `${this.text}`;
  }
  formatAuthor() {
    return `${this.author}`;
  }
}

export default Quote;
