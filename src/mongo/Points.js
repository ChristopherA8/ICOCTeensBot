class Points {
  constructor(db) {
    this.collection = db.collection("points");
  }
  async addPerson(person) {
    const newPerson = await this.collection.insertOne(person);
    return newPerson;
  }
  async getPerson(person) {
    const aPerson = await this.collection.find(person);
    return aPerson;
  }
  async getAll() {
    const allPeople = await this.collection.find({});
    return allPeople;
  }
}
module.exports = Points;
