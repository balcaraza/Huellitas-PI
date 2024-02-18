let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput")
let tittle = document.getElementById("tittle")

signIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    tittle.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    tittle.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}
