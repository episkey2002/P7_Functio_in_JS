//D-DO NOT
//R-REPEAT
//Y-YOOURSELF

//FUNCTION DEFINATION
// function sayHello()
// {
//     console.log("Hello Priti");
//     console.log("Bye Priti");
// }

//FUNCTION CALLING
// sayHello();
// sayHello();
// console.log("Output executed");
// sayHello();
// sayHello();

//Let's see how we can pass a vaalue a value to a function and get output in return

function sayHiii(name)
{
    return `Hello ${name}`
}

let user = "Priti";

let greet = sayHiii(user);
console.log(greet);

