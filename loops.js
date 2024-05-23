var json = [{
    "name" : "Avinash", 
    "phone"   : "123456",
    "email": "avinash@gmail.com",
    "degree": "bsc"
},
];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.phone);
    console.log(obj.email);
    console.log(obj.degree);

}
//for Each
json.forEach(function(obj) { console.log(obj.phone); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
  console.log(json[key].phone);
  console.log(json[key].email);
  console.log(json[key].degree);
}
}
//for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);
