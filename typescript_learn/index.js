"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1").then(function (res) {
    var users = res.data;
    var id = users.id;
    var name = users.name;
    var email = users.email;
    console.log("Id is ".concat(id, "\n    name is ").concat(name, "\n    email is ").concat(email));
}).catch(function (err) { return console.log(err); });

