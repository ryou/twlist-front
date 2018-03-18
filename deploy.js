const ftpDeploy = require('ftp-deploy');
const env = require('./.env');

ftpDeploy(env.deploy);
