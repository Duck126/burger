const orm = require("../config/orm.js");

//selectAll : orm.selectAll("burgers");

//updateOne : orm.updateOne("burgers" , columnInput, updateInput, id);

//insertOne : orm.insertOne("burgers" , burger_name, devoured, burgerInput, devouredInput);

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(data){
            cb(data);
        });
    },

    insertOne: function(tableInput,[burger_name, devoured] , burgerInput, devouredInput, cb){
        orm.insertOne("burgers", [burger_name, devoured], burgerInput, devouredInput, cb, function(data){
            cb(data);
        });
    },

    updateOne: function(tableInput, columnInput, updateInput, id, cb) {
        orm.updateOne("burgers", columnInput, updateInput, id, cb, function(data){
            cb(data);
        });
    }
}




