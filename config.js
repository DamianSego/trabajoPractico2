const config = {
   appConfig: {
        port: process.env.APP_PORT
    },
    dbConfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbname: process.env.DB_NAME
    }
}

module.exports = config