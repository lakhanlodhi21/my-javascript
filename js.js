// java script is a syncronus language // line by line code execute hoga jab tak bo nhi chalega tab tak neeche ka code nhi chalega
// kuch kuch method usko majboor krti hai asyncronus ki tarah behave krne ke liye
// setTimeout(() => {
//     console.log("in process")
// }, 2000);
// console.log("completed");

// let butt = () => {
//     let butt = document.querySelector("#display")
//        setTimeout(() => {
//         console.log("lakhan");
        
//        }, 3000);
//    }  ---------->>>>>>> delay krne ke liye use hota hai

//----------->>>>>>>>>>>>>>>>> code ko baar baar repeat krne ke liye use hota hai set internal


let count = 0
let inter
let butt = () => {
    let butt = document.querySelector("#display")
   let inter = setInterval(() => {
        count++
        console.log(count) 
    }, 2000);
}
let stop = () => {
    clearInterval(inter)
}

