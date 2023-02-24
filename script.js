const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//let copyPassword = ''
let passwordLength = 0
let hasPassword = false
let firstPassword = document.getElementById("first-generator")
let secondPassword = document.getElementById("second-generator")



function generate(){
    hasPassword = true
    
    if(hasPassword){
        for (let i = 0; i < passwordLength; i++){
            firstPassword.textContent += characters[Math.floor(Math.random()*characters.length)]
            secondPassword.textContent += characters[Math.floor(Math.random()*characters.length)]   
        } 
    }      
}
function renderPassword(){
    passwordLength = document.getElementById("password-length").value
    if(!hasPassword && passwordLength >= 8){
        generate()
    }
}

// function copy(){
//     let copyPassword = document.getElementsByClassName("generator").textContent
//     copyPassword.select()
//     navigator.clipboard.writeText(copyPassword.value)
// }
