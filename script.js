var istatus = document.querySelector("h3")
var btn = document.querySelector("#adfrnd")
check = 0

btn.addEventListener("click",function(){
    if(check==0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove"
        check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
    
})
