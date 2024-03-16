const showpass = document.querySelector("span")
const generate = document.querySelector(".generate")
const keyword = document.querySelector("input")
const keybtn = document.querySelector(".keybtn")

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()[{]}<>/~|?=+-_";

const allchar = uppercase + lowercase + number + symbol;


// Generate a random number between 1 and 5

// let ru = uppercase[Math.floor(Math.random() * uppercase.length)];
// console.log(ru);


function randompass(passlength){
    let pass = "";
    while(passlength>0){
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        if(randomNumber == 1){
            pass += uppercase[Math.floor(Math.random() * uppercase.length)];
        }
        
        else if(randomNumber == 2){
            pass += lowercase[Math.floor(Math.random() * lowercase.length)];
        }
        else if(randomNumber == 3){
            pass += number[Math.floor(Math.random() * number.length)];
        }
        else if(randomNumber == 4){
            pass += symbol[Math.floor(Math.random() * symbol.length)];
        }
        else if(randomNumber == 5){
            pass += allchar[Math.floor(Math.random() * allchar.length)];
        }
        passlength--;
    }
    return pass;
}


function keypass(rand,key){
    let pass = "";
    let randlength=rand.length;
    let keylength=key.length;
    let r=0;
    let k=0;
    while(r<randlength  && k<keylength){
        pass += key[k];
        pass += rand[r];
        r++; k++;
    }
    if(r<randlength){
        while(r<randlength){
            pass += rand[r];
            r++;
        }
    }
    else if(k<keylength){
        while(k<keylength){
            pass += key[k];
            k++;
        }
    }
    console.log(pass);
    return pass;
}


function generatepass(){
    let passlength = Math.floor(Math.random() * 10) + 6;
    showpass.innerText = randompass(passlength)

}

// generate.addEventListener("onclick", function(){
//     generatepass();
// })

keybtn.addEventListener("click",function(){
    let key = keyword.value.trim();
    if(key ==""){
        window.alert("key is empty")
    }
    else{
        let randomNumber = Math.floor(Math.random() * 4) + 3;
        console.log(randomNumber);
        let rand = randompass(randomNumber);
        showpass.innerText = keypass(rand,key)
    }
})
