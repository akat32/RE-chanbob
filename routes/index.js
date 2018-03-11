module.exports = (express, fs)=>{
  var router = express.Router();

  var search = require('./models/search')(express.Router(), fs);
  router.use('/search', search);

  return router;
};
