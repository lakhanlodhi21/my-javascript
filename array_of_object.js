let arr = ["apple",1,"banana"] 
let obj = {
    name: "Lakhan",
    Age: 23,
    city: "bhopal"


}
// array of object//
  
let userdata = [{
    name: "lakhan",
    age: 21,
    city: "bhopal",
    gender: "male"
    
 },
    {
        name: "sidd",
        age: 21 ,
        city: "indore",
        gender: "male"
        
    },
    {
        name: "rahul",
        age: 34,
        city: "bhopal" ,
        gender: "male"
        
    },

    {
        name: "sachin",
        age: 23,
        city: "raisen",
        gender: "male"
    },
    {
        name: "simran",
        age: 20,
        city: "bhopal",
        gender: "female"

    }]
console.log(userdata[0]);
    
let shown = document.querySelector("#show")
userdata.map((e) => {
    shown.innerHTML += `
    
    <tr>
    <td>${e.name} </td>
    <td>${e.age} </td>
    <td>${e.city} </td>
    <td>${e.gender} </td>
    </tr>
    
    

    `
})

    