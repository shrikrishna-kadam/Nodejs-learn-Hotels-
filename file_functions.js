console.log("file system ");
/*
        var fs = require('fs');
        var os = require('os');

        let user =os.userInfo();   // this is inbuilt function to retreate info of user.
        // console.log(user)           // all info of user
        console.log(user.username);


        fs.appendFile('new.txt', 'hi' + user.username + '!\n', ()=> console.log('file created'));
            
            // console.log(fs);        // for all the file related functions
            // console.log(os);        // os -"-
            

*/
   
const notes = require('./file.js');     // importing file/code.

age= notes.age;
console.log(age);                     // can be...  console.log(notes.age);


let res= notes.addnum(age, 51);
console.log(res);                     //can be...  console.log(notes.addnum(notes.age,7));

