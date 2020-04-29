var mysqlx = require('@mysql/xdevapi');
var config = require('./db_config');
var connection = {}

connection.getInstance = function () {
    const client = mysqlx.getClient(config,
        {
            pooling:
            {
                enabled: true,
                maxSize: 3
            }
        })
    client.getSession().then(session => {
        console.log(session.inspect()); // { pooling: true, ... }
    });
}

module.exports = connection