
//localStorage da bilgiler tarayıcıyı kapattığımızda silinmez.
// LOCAL STORAGE
let val;

// set item

const firstName = localStorage.setItem('firstName','Sadık');
const lastName = localStorage.setItem('lastName','Turan');
let hobies = ['sinema','araba','gezmek'];

// get item
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

// remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// clear
// localStorage.clear();

// set array to storage

//JSON.stringify kullanılmazsa hobies içerisindeki elemanlar sanki tek string bir ifade gibi görünürdü.
localStorage.setItem('hobies',JSON.stringify(hobies));

//tekrar object türüne çevirmek için kullanılır.
val = JSON.parse(localStorage.getItem('hobies'));

console.log(val);
console.log(localStorage);

//sessionStorage da bilgiler tarayıcıyı kapattığımızda silinir.
// SESSION STORAGE
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');

//  console.log(sessionStorage);