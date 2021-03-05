// Window Object

let val;
var a = 10;
function abc(){
   return 0;
};

val = window;

// alert                //ekrana alert kutusu çıkartır.
// alert('Merhaba');

// prompt               //ekrana kutu çıkararak bizden sayı girmemizi ister
// var val = prompt('bir sayı giriniz ');  

// confirm  //bir işlem yapmadan önce kullanıcıya hatırlatma yapmak için      kullanılır. true ve false döndürür. Buda kullanıcıdan gelen mesaja göre işlemlerimizi yapmaya yarar.
// val = confirm('emin misiniz ?');


// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll    //Tarayıcıda scroll barın nerede olduğunu göstermeye yarar.
// val = window.scrollX; //yatay eksen
// val = window.scrollY; //dikey eksen

// location

val = window.location;//tarayıcının adresbilgilerini getirir.
val = window.location.href;//tarayıcının adres linkini ekrana yazdırır.
val = window.location.hostname;//sadece internet adresimizi almaya yarar.
val = window.location.host; //Port numarası ile birlikte adresimizi alırız.
val = window.location.protocol;//hanggi protokolü aldığına ulaşırız.
val = window.location.search;

// window.location.href='http://hakangirgin.com';//sayfaya yeni bir internet adresi atamak için kullanılır.
// window.location.reload();//sayfayı refresh etmek için kullanılır.

console.log(val);