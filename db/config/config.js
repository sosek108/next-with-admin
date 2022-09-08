module.exports = {
  development: {
    username: 'api',
    password: 'api',
    database: 'api',
    host: '127.0.0.1',
    port: 15038,
    dialect: 'mariadb',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
};
