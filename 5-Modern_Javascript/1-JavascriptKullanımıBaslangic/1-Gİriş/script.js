
// // // console.log("Merve");
// // // console.error("Hata oldu")




// // var age;
// // console.log(age)

// // age=20
// // console.log(age)


// // var fullName="Hakan Girgin"
// // console.log(fullName)

// // fullName="Merve"
// // console.log(fullName)


// // // Ders  2 
// // //Değişken Tanımlama Kuralları

// // //Sayısal ifade ile başlayamaz.
// // //var 1yas bu olamaz.
// // //Ancak var yas1; olabilir.

// // //Komut isimleri ile tanımlama yapılamaz.
// // //Birden fazla kelimeli değişkenleri alt çizgi ile  yada olduğu gibi birleşik yazmalısınız.

// // var ad="hakan";
// // var soyad="Girgin"
// // var ad_soyad="Hakan Girgin"
// // var adSoyad="Hakan Girgin"


// // //case sensitive(büyük küçük duyarlılığı vardır.)

// // //const da beir tanımlama terimidir. Ancak const u kullanırken tanımladığınız bir verinin değerinin birdaha değişmeyeceğinden emin olmak isterseniz kullanmalısınız.


// //Ders 3

// //Değişken tipleri

// //Pritive Tipler

// //String

// let firstName="Hakan";
// console.log(typeof firstName);

// //number

// let age =20;
// let money=100.5;
// console.log(typeof money);
// console.log(typeof age);


// //Boolean

// let isActive=true;
// let isActive2=false;

// console.log(isActive);
// console.log(isActive2);


// //null

// let job=null;


// //undefined

// let car;

// console.log(car);   


// //Reference Tipler-Objects



// //Array

// let names=['Merve','Hakan','Burak'];

// console.log(typeof names)

// //Object

// let adress={city:'Çanakkale',country:'Türkiye'}

// console.log(typeof adress);

// //Function

// var calculateAge = function(){
//     return 0;
// };

// console.log(typeof calculateAge);

// Ders 4 Tür Dönüşümleri

// let num1="5";
// let num2="10"
// console.log(num1+num2);
// console.log(typeof num1)


let val;

//number to string

val=String(15);

//bool to string

val=String(true);

//date to string

val=String(new Date());

//array to string

val=String([1,2,3]);


//toString()

val=(10).toString();
val=(false).toString();


//string to number

val=Number("10");
val=Number(true);
val=Number(false);
val=Number(null);
val=Number("a");

//parseInt yazılan numberın tam sayı kısmını alır sadece.

//parseFloat ise yazılan numberin tamamını yani ondalıklı kısmınıda alır.

val=parseInt("9.5");
val=parseFloat("9.5");





console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


