var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chanbob');
mongoose.Promise = global.Promise;

var HosSchema = mongoose.Schema({
  name : {type : String},
  address : {type : String},
  category : {type : String},
  minPrice : {type : Number},
  x : {type : Number},
  y : {type : Number},
  menus : [{
    name : {type : String},
    price : {type : Number}
  }]
});
Hos = mongoose.model("hos", HosSchema);

exports.Users = Hos;
