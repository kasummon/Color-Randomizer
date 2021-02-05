let hexAttirbute = 15;
let rgbaAttirbute = 255;
let value = "";
const color = document.getElementById("color");
const hexChange = document.getElementById("hex-change");
const rgbaChange = document.getElementById("rgba-change");

hexChange.addEventListener("click",() => {value = "Hex"; 
console.log("Current value set to",value);
document.getElementById("color-text").innerHTML = `Generator set to : ${value}` 
});

rgbaChange.addEventListener("click",() => {value = "rgba"; 
console.log("Current value set to",value);
document.getElementById("color-text").innerHTML = `Generator set to : ${value}` 
});

color.addEventListener("click", ()=> {random(value);});

/* ****** functions ****** */

function random(par){
    
    if (par == "Hex"){
        console.log("Hex value been creating.....")
        hexRandomizer();        
    }

    else if(par == "rgba"){
        console.log("Rgba value been creating.....")
        rgbaRandomizer()        
    }
}

function hexRandomizer(){
   let colorStr = "#";
   for (let i=0; i<6 ; i++ ) {
       let randNumber = Math.floor(Math.random()*hexAttirbute);
       if(randNumber == 10){
           colorStr = colorStr+"a";
            }
            else if(randNumber == 11){
            colorStr = colorStr+"b";
            }
            else if(randNumber == 12){
            colorStr = colorStr+"c";
            }
            else if(randNumber == 13){
            colorStr = colorStr+"d";
            }
            else if(randNumber == 14){
            colorStr = colorStr+"e";
            }
            else if(randNumber == 15){
            colorStr = colorStr+"f";        
            }
            else{
            colorStr = colorStr+String(randNumber);
  
        }
   };

   console.log(colorStr);
   document.getElementsByClassName("container-center")[0].style.backgroundColor = colorStr;
   document.getElementById("color-text").innerHTML = `Color is  : ${colorStr}`
};

function rgbaRandomizer() {
    let colorArray = [];

    for (let i=0; i<3;i++){
        let randNumber = Math.floor(Math.random()*rgbaAttirbute);
        colorArray.push(String(randNumber));
    }

    let colorStr = rgbaModifier(colorArray[0],colorArray[1],colorArray[2]);
    document.getElementsByClassName("container-center")[0].style.backgroundColor = colorStr;
    document.getElementById("color-text").innerHTML = `Color is  : ${colorStr}`

}

function rgbaModifier (val1,val2,val3){
    let rgbaStr = `rgba(${val1},${val2},${val3})`;
    console.log(rgbaStr);
    return rgbaStr;
}