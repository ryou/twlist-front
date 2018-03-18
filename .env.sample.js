module.exports = {
  host: 'localhost',
  port: 8080,
  deploy: {
    local: {
      targetDir: './dist',
    },
    ftp: {
      host: 'example.com',
      user: 'example',
      password: 'example',
      targetDir: 'example',
    },
  },
  production: {
    'process.env': {
      NODE_ENV: '"production"',
      apiBaseUrl: '"https://example.com"',
    },
  },
  development: {
    'process.env': {
      NODE_ENV: '"development"',
      apiBaseUrl: '"https://example.com"',
    },
  },
};
