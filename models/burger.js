const mydb = require("../config/orm.js");

mydb.selectAll();


//mydb.insertOne("Turkey Burger", 0);

mydb.updateOne(5);


mydb.selectAll();
