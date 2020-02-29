module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/auth.db3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done); // tur on foreign key enforcement
            },
        },
    },
    testing: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './data/test.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './database/seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done); // turn on foreign key enforcement
            },
        },
    },
};
