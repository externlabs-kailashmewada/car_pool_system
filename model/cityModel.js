const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  
  
  stateName: { type: String },
  name: { type: String, default: null },
  },
  {
    collection:'city'
  });
module.exports = mongoose.model('City', citySchema);





// var CountrySchema = new Schema({
//   name: String,
//   created_at: Date
// });

// var CitySchema = new Schema({
//   countryName: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
//   created_at: Date
// });

// var UserSchema = new Schema({
//   name_surname: String,
//   city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' }
// })

// mongoose.model('Country', CountrySchema);
// mongoose.model('City', CitySchema);
// mongoose.model('User', UserSchema);

// module.exports = mongoose.model("city", citySchema);

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var City = new Schema({
//     CityID: { type: String, default: "" },
//     CountryID: { type: String, default: "" },
//     City_Name: { type: String, default: "" },
//     location: { //for Map Purpose
//         longitude: Number,
//         latitude: Number
//     },
//     Point: { type: [Number], index: '2d' },
// }, { collection: 'City' });
// City.index({ Point: '2dsphere' });
// module.exports = mongoose.model('City', City);