import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ip-172-104-14-147.cloudezapp.io',
    user : 'api-ecoleta',
    password : 'EcoletaApi@2020',
    database : 'ecoleta'
    //filename: path.resolve(__dirname, 'database.sqlite'),
  },
});

export default connection;
