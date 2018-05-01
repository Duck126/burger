var connection = require("./connection.js");

var exports = module.exports = {};


   exports.selectAll = function () {
        connection.query("SELECT * FROM burgers;", function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

   exports.insertOne = function  (name, devoured) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ( ?, ?);", [name, devoured], function(err, burgerData){
            if (err) throw err;
            console.log('Success! Inserted: ' + name + 'into the burgers table.');
        })
    }

   exports.updateOne = function  (id) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?;", id,  function(err, burgerData){
            if (err) throw err;
            console.log(burgerData.eff);
            console.log('Success! ' + burgerData.affectedRows + ' burgers devoured!');
        })
    }
    


