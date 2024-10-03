module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', '127.0.0.1'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE', 'heat-transfer'),
        user: env('PGUSER', 'heat-transfer'),
        password: env('PGPASSWORD', 'heat-transfer'),
       ssl: env.bool(true),
      },
      pool: {min: 0}
    },
  });