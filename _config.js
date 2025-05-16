const config = {};

const username = 'conquest';
const password = 'db_25bumBum%23';
const baseURI = 'mongodb+srv://conquest:db_25bumBum%23@cluster0.zksscer.mongodb.net /galery?retryWrites=true&w=majority';

config.mongoURI = {
  production: baseURI,
  development: baseURI,
  test: baseURI
};

module.exports = config;

