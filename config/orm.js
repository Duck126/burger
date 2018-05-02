var connection = require("./connection.js");

var orm = {

selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function (err, data) {
            if (err) throw err;
            //console.log(data);
        })
        cb(data);
    },

   insertOne:  function  (tableInput, [burger_name, devoured], burgerInput, devouredInput, cb) {
       var queryString = "INSERT INTO ?? (? , ?) VALUES (? , ?);"
        connection.query(queryString, [tableInput, burger_name, devoured, burgerInput, devouredInput ], function(err, burgerData){
            if (err) throw err;
            console.log('Success! Inserted: ' + name + 'into the burgers table.');
        })
        cb(data);
    },

   updateOne : function  (tableInput, columnInput, updateInput, id, cb) {
       var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        connection.query(queryString, [tableInput, columnInput, updateInput, id],  function(err, burgerData){
            if (err) throw err;
            console.log('Success! ' + burgerData.affectedRows + ' burgers devoured!');
        })
        cb(data);
    }

};

module.exports = orm;


   
    


