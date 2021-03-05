var merveKilo=50;
var hakanKilo=85;
var merveBoy=1.6;
var hakanBoy=1.75;


var hakanIndex=hakanKilo/(hakanBoy*hakanBoy);
var merveIndex=merveKilo/(merveBoy*merveBoy);




let merveZayif =(merveIndex>=0) &&(merveIndex<=18.4)
let merveNormal=(merveIndex>=18.5) &&(merveIndex<=24.9)
let merveKilolu =(merveIndex>=25.0) &&(merveIndex<=29.9)
let merveSisman= (merveIndex>=30) &&(merveIndex<=34.9)



let hakanZayif =(hakanIndex>=0) &&(hakanIndex<=18.4)
let hakanNormal=(hakanIndex>=18.5) &&(hakanIndex<=24.9)
let hakanKilolu =(hakanIndex>=25.0) &&(hakanIndex<=29.9)
let hakanSisman= (hakanIndex>=30) &&(hakanIndex<=34.9)


console.log(merveZayif + " Merve zayıfsın");
console.log(merveNormal + " Merve normalsin");
console.log(merveKilolu + " Merve kilolusun");
console.log(merveSisman + " Merve obezsin");

console.log(hakanZayif + " Hakan zayıfsın");
console.log(hakanNormal + " Hakan normalsin");
console.log(hakanKilolu + " Hakan kilolusun.");
console.log(hakanSisman + " Hakan Obezsin");

