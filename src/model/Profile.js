let data = {
  name: "Elton Santos",
  avatar: "https://avatars.githubusercontent.com/u/1292594?v=4",
  "monthly-budget": "3000",
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
  "value-hour": 75,
}; // Profile

module.exports = {
  get(){
    return data;
  },

  update(newData){
    data = newData;
  }
}
