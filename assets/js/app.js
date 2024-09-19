
const day = document.querySelector(".day");
const night = document.querySelector(".night");


day.addEventListener("click", () => {

    if (document.body.style.backgroundColor = "white"){
        document.body.style.backgroundColor = "white";
        night.style.backgroundColor = "white";
        night.style.color = "black";
    }
    else{
        document.body.style.backgroundColor = "white";
        night.style.backgroundColor = "black";
        night.style.color = "white";
    }



})


night.addEventListener("click", () => {

    if (document.body.style.backgroundColor = "white"){
        document.body.style.backgroundColor = "black";
        day.style.backgroundColor = "black";
        day.style.color = "white";
        

    }
    else{
        document.body.style.backgroundColor = "white"
        day.style.backgroundColor = "white";
        day.style.color = "black";
    }

}


)