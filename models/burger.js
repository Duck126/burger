const orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(columns, values, cb){
        orm.insertOne("burgers", columns, values, function(data){
            cb(data);
        });
    },

    updateOne: function(updateInput, id, cb) {
        orm.updateOne("burgers", "devoured", updateInput, id, function(data){
            cb(data);
        });
    },

    delete: function(selected, cb) {
        orm.delete("burgers", selected, cb, function(data){
            cb(data);
        });
    }
}

module.exports = burger;




