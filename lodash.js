console.log("lodash functions ");

let _=require('lodash');

var data =["man", 1,3,33,33,5,5,5,7,7,'a','a','b','b',8,'g'];
var filter =_.uniq(data);
console.log(filter);                // can be console.log(_.uniq(data));

console.log(_.isString('don'));
    