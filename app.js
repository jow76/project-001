function enterName(){
    let userName = prompt("Please enter your name:");
    return document.write(userName);
}

function ageVerification(){
    let userAge = prompt("How old are you?");
    if(userAge <18){
        document.write("Come back when you're old enough, bub.");
        window.stop();
    }
    else if(userAge >=18){
        document.write("Access granted.");
    }
    else{
        document.write("Please enter a number.");
        window.stop();
    }
}

function pets(){
    let myPets = ["cat", "red panda" ,"cabbit"]
    for (let i= 0; i < myPets.length;i++){
        document.write("I have a pet " + myPets[i] + ". ")
    }
}