let number = document.getElementById('number')
let valo = {prev:null,nwo:null,}
let opratr = ''
let islest = false;

window.onload = function(){
    number.focus()
}


function getnmprs(e){

    if(islest){
let resrt;


if(valo.nwo){
    resrt = valo.nwo +'' + e
    valo.nwo = resrt
    number.value= resrt

}else{
    resrt = valo.prev +'' + e
    valo.prev = resrt
    number.value= resrt

}
    }else{
         number.value= e
    if(valo.prev){
        valo.nwo = e
        
    }else{
        valo.prev=e
    }

    islest = true;
    }


   
}


function getoprtrs(r){
console.log(r);
opratr=r
console.log(valo);

islest=false;
}

///
function clca(){
    if(!valo.nwo){
        return;
    }

    if(valo.prev&&valo.nwo&&opratr){
        if(opratr==='+'){
let sas =  Number(valo.prev)  + Number(valo.nwo) 
 number.value = sas
valo.prev = sas
        }
        if(opratr==='-'){
            let sas =  Number(valo.prev)  - Number(valo.nwo) 
 number.value = sas
valo.prev = sas

}
if(opratr==='*'){
    let sas =  Number(valo.prev)  * Number(valo.nwo) 
    number.value = sas
   valo.prev = sas
}
if(opratr==='/'){
    let sas =  Number(valo.prev)  / Number(valo.nwo) 
    number.value = sas
   valo.prev = sas

}
    }

    islest=false;
}

