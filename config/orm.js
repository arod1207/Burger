var connection = require('../config/connection.js');

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], (err, result) => {
            if (err) throw err;     
            cb(result);
        });
    },

    deleteOne: function (id, cb) {
        var queryString = "DELETE FROM burgers WHERE id = ?";
        connection.query(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    }
};

module.exports = orm;
