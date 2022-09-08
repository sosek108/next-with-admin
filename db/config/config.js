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
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
  production: {
    username: 'root',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
};
