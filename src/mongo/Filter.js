class Filter {
  constructor(db) {
    this.collection = db.collection("filter");
  }
  // async addWord(word) {
  //   const newWord = await this.collection.insertOne(word); // I'll need to get the existing record, add a word and replace with the new record
  //   return newWord;
  // }

  async checkWord(word) {
    for (const aWord in await this.getWords()) {
      if (aWord.toLowerCase() == word.toLowerCase()) {
        // return true;
        console.log(`${aWord} ?= ${word}`);
      }
    }
  }

  async getWords() {
    const allWords = await this.collection.find({});
    return allWords.toArray();
  }
}

module.exports = Filter;
