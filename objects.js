//OBJECTS in JS
//  There are two types of object creation 
// 1-> by using constructor which basically creates a singleton object
Object.create
// 2-> by using object literals
const user = {
    name : 'Aditya',
    age : 18,
    city : "Delhi",
    email : "adityatiwari1312@gmail.com",
    isLoggedIn : false
}
console.log(user.email) // -> this is one way to access the object by using .
console.log(user["email"])  // -> should use this method as key in objects are treated as string and to access string(key) with dot is not possible.

// for eg, if we have keys like this, we wont be able to access with '.', therefore we use [] to  access objects
const anotherUser = {
    "full name": "Aditya Tiwari",
    "Address" : "Geeta Colony,Delhi"
}
console.log(anotherUser['full name'])


//SYMBOL and how to use a symbol in object
const sym =  Symbol('Key1')
const diffUser = {
    "name" : "Aditya",
    [sym] : 'Symbol value',
    email : 'aditya@google.com'
}
console.log(diffUser[sym])
console.log(diffUser)
diffUser.email = 'adiya@microsoft.com' // -> changing the values of the key
console.log(diffUser)

Object.freeze(diffUser) // -> this is use to freeze the object to restrict for any changes made to object 
diffUser.email = 'aditya@apple.com'
console.log(diffUser)

user.greeting = function(){
    console.log("Hello User")
}
user.anotherGreeting = function(){
    console.log(`Hello,${this.name}welcome to Javascript`)
}
console.log(user.greeting())
console.log(user.anotherGreeting())
