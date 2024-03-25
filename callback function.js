console.log("callback function");
        /*
        function inner_fun(){
            console.log('callback function compleated.');
        }
        const add = function(a,b, inner_fun){
            let result = a+b;
            console.log("result is "+result); // main function work compleated
            inner_fun();
        }
        // here add is the main function and inner_fun is the callback function..
        add(87,98, inner_fun)

        */


// or


        const add = function(a,b, fun){
            let result = a+b;
            console.log("result is "+result);  
            fun();
        }
        // here add needs the inner function as a parameter ; we can write inline function here.

            /*     add(87,98, function(){
                    console.log("inner function");
                })  */
        // inline function can be also like:
        add(3,56, ()=> console.log('add compleated'));