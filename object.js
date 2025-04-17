// let arr = ["name", 25, "bhopal"]
// let obj = {
//     Name: "lakhan",
//     age: 25,
//     city: "Bhopal"

// }
// console.log(obj) // way to print full object
// console.log(obj.age) // way to print key value of object
// obj.college = "sage university"
// obj.age = 26 // way to update
// // delete obj.Name // key value ko delete krne ka tarika
// console.log(obj)
// D-struchring and spread operator // interview question
//  const  cities = {name:"lakhan",Age: 21,city: "bhopal"}
// const { name,Age,city } = cities;
// console.log(city) --------->>>>>>>>>// d-strucher krne ka way
//----------------------->>>>>>>>>>>>>>>>>>>>> WHy use destrucher
// Makes the code cleaner and easier to read.
// Allows Quick access to object properties.
// this.----->>>> jis object ke andar likhte hai bo udhar hee define ho hata hai
// prototype---------->>>>>>> apne aap me ek method hai jis ke andar kayi saare method and properties hoti hai
// javascript ke andar arr internaly ek object hai'
// ham khud ke prototype bhi bana sakte hai

// spread opreator ----------------->>>>>>>>>>>>>>>>>>>>

//do ya do se jyda object ko jod deta hai
// const student1 = { Name: "lakhan", Age: 21, }
// const student2 = { City: "gurgaon", Email: "yyyyyxx" }
// const combinedstudent = { ...student1, ...student2 };
// console.log(combinedstudent) ------------------------------->>>>>>>>>>>>>>>>>>>>>>> Spread operator

// let info = {
//     name: "lakhan",
//     age: 21,
//     city: "Bhopal"
// }

// for (let keys in info) {
//     // console.log(keys); --------->>>>>>>> access krne ka tarika keys ko
//     console.log(keys," ",info[keys]);
// } --------------------------------------->>>>>>>>>>>>>>> for in loop sirf object me lagta hai

// let arr = ["hello", "hyy", "heyyy"]
// for (let lakhan of arr) {
//     console.log(arr);
// } --------------------->>>>>>>>>>>>>>>> for of loop sirf array me lagta hai




// map --->>> map method array ke ek ek element ko uthayega usme kuch perform krega modify krega aur naya array return krega;
// map filter ka kaam nhi krega 
let num = [2, 5, 6, 4, 8, 7, 9, 8]
// let arr=num.map((e) =>{
//     return e*2
// })
// console.log(arr);
// console.log(num);

// higher order function kya hai --->>> jiske parameter me koi function pass ho higher order function hai
// call back function kya hai --->>> jo kisi ke parameter me pass ho jaye callback function hota hai

//----->>>>>>> filter
// kuch value ko nikal ke dega
// aur naya array return krega 
// filter map ka kaam bhi kr sakta hai 

// let arr = num.filter((e) => {
//     return e>6
// })

// console.log(arr);

// ------->>>>>>>>> for each string return krega

num.forEach((e) => {
    console.log(e*2);
    
})









