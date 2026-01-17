// Add a method describe() that prints the book details.
const book = {
  title: "Wings of Fire",
  author: "A. P. J. Abdul Kalam",
  pages: 180,
  describe() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  }
};
book.describe();