import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    host : 'ip-172-104-14-147.cloudezapp.io',
    user : 'api-ecoleta',
    password : 'EcoletaApi@2020',
    database : 'ecoleta'
    //filename: path.resolve(__dirname, 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
