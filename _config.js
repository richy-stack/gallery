const mongoURI = 'mongodb+srv://conquest:Db25bumBum@cluster0.zksscer.mongodb.net/gallery?retryWrites=true&w=majority';

const config = {};

config.mongoURI = {
  production: mongoURI,
  development: mongoURI,
  test: mongoURI
};

module.exports = config;

