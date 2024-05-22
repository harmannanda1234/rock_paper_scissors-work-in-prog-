let comp= Math.random()*3;
let compch;
let userch;
let result ='you won';
if(comp>0&&comp<=1){
compch='ROCK';
}
 if(comp>1&&comp<=2){
    compch="PAPER"
}
else{
    compch='SCISSORS';

}

if(userch==compch){
    console.log("tie");

}
else{
   console.log("you lost");
    
}




