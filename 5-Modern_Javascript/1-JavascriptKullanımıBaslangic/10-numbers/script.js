// Numbers

let val;

// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(6);
// val = num.toFixed(2);

val = Math.PI;
val = Math.round(2.4);//en yakın sayıya yuvarlar çıktısı 2
val = Math.round(2.7);//en yakın sayıya yuvarlar çıktısı 3
val = Math.ceil(2.4);//Herzaman yukarıya doğru yuvarlar çıktı 3
val = Math.ceil(2.6);//Herzaman yukarıya doğru yuvarlar çıktı 3
val = Math.floor(2.4);//Herzaman aşağıya doğru yuvarlar çıktı 2
val = Math.floor(2.7);//Herzaman aşağıya doğru yuvarlar çıktı 2
val = Math.sqrt(64);//Karekök almaya yarar. Çıktı 8
val = Math.pow(2,4);//pow methodunda 2 sayı ister bunu 2üzeri 4 olarak algılar çıktısı16 olur.
val = Math.abs(-100);//Parantez içerisine yazılan sayının mutlak değerini alıpp yazmaya yarar.
val = Math.min(1,2,3,2,4,9);//Parantez içerisine yazılan sayılardan en küçüğünü yazdıran methoddur.
val = Math.max(4,5,6,4,98,7);//parantez içerisine yazılan sayılardan en büyüğünü yazdıran programdır.
val = math.random();//Random methodu ise bize 0 ile 1 arasından rastgele bir sayı tutar.
val = Math.floor(Math.random()*100+1);//+1 yazılmazsa 0-100 arasında 0 dahil olur. +1 yazılırsa 1-100 arasında rastgele sayı seçmemize yarar.   

console.log(val);
console.log(typeof val);