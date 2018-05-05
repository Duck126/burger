var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function (err, data) {
            if (err) throw err;
            //console.log(data);
            if (cb) {
                cb(data);
            }
        });
    },

    insertOne: function (tableInput, columns, values, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        //console.log(queryString);
        connection.query(queryString, columns, values, function (err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
            cb(data);
        });
        
    },

    updateOne: function (tableInput, columnInput, updateInput, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        //console.log("ormUpdateOne", [tableInput, columnInput, updateInput, id, cb])
        let sql = connection.query(queryString, [tableInput, columnInput, updateInput, id], function (err, data) {
            if (err) throw err;
            console.log('Success! ' + data.affectedRows + ' burgers devoured!');
            if (cb) {
                cb(data);
            }
        });
        //console.log(sql.sql)
    },

    delete: function (tbl, selected, cb) {
        var queryString = "DELETE FROM " + tbl + " WHERE " + selected;
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            console.log(data);
            if (cb) {
                cb(data);
            }
        })
    }
};

module.exports = orm;