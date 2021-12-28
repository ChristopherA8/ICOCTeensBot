class Birthdays {
  constructor(db) {
    this.collection = db.collection("birthdays");
  }
  async addBirthday({ id, day, month }) {
    const newBirthday = await this.collection.insertOne({ id, day, month });
    return newBirthday;
  }
  async updateBirthday({ id, day, month }) {
    const updatedBirthday = await this.collection.updateOne(
      { id: id },
      {
        $set: {
          day: day,
          month: month,
        },
      }
    );
    return updatedBirthday;
  }
  async getBirthday(id) {
    const aBirthday = await this.collection.findOne({ id: id });
    return aBirthday;
  }
  async allBirthdays() {
    const allBirthdays = await this.collection.find({});
    return allBirthdays;
  }
}
module.exports = Birthdays;
