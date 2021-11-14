class Filter {
  constructor(db) {
    this.collection = db.collection("filter");
  }
  // async addWord(word) {
  //   const newWord = await this.collection.insertOne(word); // I'll need to get the existing record, add a word and replace with the new record
  //   return newWord;
  // }
  async getWords() {
    const allWords = await this.collection.find({});
    return allWords.toArray();
  }
}
module.exports = Filter;
