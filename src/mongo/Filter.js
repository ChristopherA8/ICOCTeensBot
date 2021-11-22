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

  async checkMessage(msg) {
    const args = msg.content.split(/ +/);
    for (let arg of args) {
      if (await this.checkWord(arg)) {
        return true;
      }
    }
  }

  async findWordInMessage(msg) {
    const args = msg.content.split(/ +/);
    for (let arg of args) {
      if (await this.checkWord(arg)) {
        return arg;
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
