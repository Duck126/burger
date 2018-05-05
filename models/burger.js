const orm = require("../config/orm.js");

//selectAll : orm.selectAll("burgers");

//updateOne : orm.updateOne("burgers" , columnInput, updateInput, id);

//insertOne : orm.insertOne("burgers" , burger_name, devoured, burgerInput, devouredInput);

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            //console.log(res);
            cb(res);
        });
    },

    insertOne: function(columns, values, cb){
        //console.log("add", [columns, values, cb]);
        orm.insertOne("burgers", columns, values, function(data){
            cb(data);
        });
    },

    updateOne: function(updateInput, id, cb) {
       // console.log("updateOne", [updateInput, id, cb])
        orm.updateOne("burgers", "devoured", updateInput, id, function(data){
            cb(data);
        });
    },

    delete: function(selected, cb) {
       // console.log("delete", [selected, cb])
        orm.delete("burgers", selected, cb, function(data){
            cb(data);
        });
    }
}

module.exports = burger;




