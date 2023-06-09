let passAttempt;
function secretPass(){
    while(passAttempt != "Peaber"){
        passAttempt = prompt("What's the password, buster?");
        if(passAttempt != "Peaber"){
            alert("That ain't it, bozo.");
        }
        else{
            alert("Welcome, brother.");
            break;
        }
    }
}
secretPass();

function cabbitSpawner(sauce, width){
    let cabbitNumber = prompt("How many cabbits can you handle?");
    while(cabbitNumber>0){
        let img = document.createElement("img");
        img.src=sauce;
        img.width=width;
        document.body.appendChild(img);
        cabbitNumber --;
    }
}
