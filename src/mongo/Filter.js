class Filter {
  constructor(db) {
    this.collection = db.collection("filter");
  }
  // async addWord(word) {
  //   const newWord = await this.collection.insertOne(word); // I'll need to get the existing record, add a word and replace with the new record
  //   return newWord;
  // }

  async checkWord(word) {
    let words = await this.getWords();
    for (const aWord of words) {
      if (aWord.toLowerCase() == word.toLowerCase()) {
        return true;
      }
    }
  }

  async getWords() {
    const allWords = await this.collection.find({}).toArray();
    let first = await allWords[0];
    return first.words;
  }
}

module.exports = Filter;
