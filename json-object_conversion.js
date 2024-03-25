console.log('JSon - object conversion');

 let json ='{ "name":"john", "age":34, "height":6.1}';

 const obj = JSON.parse(json);  // to convert json to object

 console.log(obj);

console.log('Name: ' + obj.name); 


/*
const obj ={
    name: "john",
    age : 34,
    Height : 6.1
};

 const json = JSON.stringify(obj);  // to convert object to JSON .

 console.log(json);
 console.log(typeof json);   // JSON is a string type always.

 */