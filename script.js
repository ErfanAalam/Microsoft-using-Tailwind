const hamburger = document.querySelector(".hamburger");
const features = document.querySelector(".features");
const open  = document.querySelector(".bar")
const close = document.querySelector(".close")

hamburger.addEventListener("click",()=>{
    if (features.classList.contains("-translate-x-96")) {
        features.classList.remove("-translate-x-96");
    }
    // else{
    //     features.classList.add("-translate-x-96");
    // }
})

// hamburger.addEventListener("click",() =>{
//     if(open.classList.contains("fa-bars")){
//         open.classList.add("fa-xmark")
//         open.classList.remove("fa-bars")
//     }
//     else{
//         open.classList.remove("fa-xmark")
//         open.classList.add("fa-bars")
//     }
// })

close.addEventListener("click",() =>{
    features.classList.add("-translate-x-96")
})

