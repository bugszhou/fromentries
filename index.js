if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/fromentries.js');
} else {
  module.exports = require('./dist/fromentries.min.js');
}
