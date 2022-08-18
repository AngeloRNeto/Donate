'use strict'

const config = require('config');
const { Client } = require('elasticsearch');
const elasticConfig = config.get('elastic-config');

const client = new Client({
  cloud: {
    id: elasticConfig.cloudID,
  },
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
});

module.exports = client;