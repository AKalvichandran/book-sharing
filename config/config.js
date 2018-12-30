const config = {
    'port': process.env.PORT || 8080,
    'mongo' : {
    'url': 'mongodb://localhost:27017/BOOKSHARE'
    },
    'secret': 'YOURSUPERSECRET'
  };
module.exports = config;