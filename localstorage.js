// agar get item krke dikhaya to data hamesha bahi rhega kuch bhi krne pe
// set item se set krenge
// get item se get krenge
// remove item se remove hoga data

let senddata = () => {

    let impname = document.querySelector("#hyy").value
    localStorage.setItem("Name", impname)
    localStorage.setItem("age",impage)
    location.reload()

}


let show = document.querySelector("#show")

let username = localStorage.getItem("Name")
let userage = localStorage.getItem("age")
show.innerHTML = `welcome ${username} and your age is ${userage}`

let removedata = () => {

    localStorage.removeItem("Name")
    localStorage.removeItem("age")
    location.reload()
}

// name age number email password //