// Strings

const firstName = 'Sadık';
const lastName = "Turan";
let hobbies = 'sinema spor kitap yazılım';
const age=35;

let val;

// string concatenation

val = firstName +" "+ lastName;
val = 'Sadık';
val +=' Turan';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' izmit\'te yaşıyorum.';

//string concat
val = firstName.concat(' ',lastName);//birleştirilmek istenen yazıları birleştirmek için concat kullanılabilir.

// string uppercase - lowercase
val = val.toUpperCase();//Yazılan yazıları büyük harfe dönüştürmeye yarar
val = val.toLowerCase();//Yazılan yazıları küçük harfe dönüştürmeye yarar.

// string replace
val = '  '+val.replace('sadik','çınar')+'     ';// replace methodu içerisindeki yazılan sadik kelimesini çınar ile değiştirmek için kullanılır.

// trim
val = val.trim();//yukarıdaki replace methodunun başında ve sonundaki boşlukları yoketmeye yarar.

// substring 
// val = val.substring(3,8);//Burada hedeflenen nesnenin 0'dan başlayarak 3.harfi ile 8. harfi arasını yazdırır.

// slice
// val = val.slice(6); //Burada val nesnesinin 6. indexinden sonraki karakterleri yazdırır.  substring methodu ile benzerdir.

//val = val.indexOf('x'); //vall nesnesi üzerinde x harfi varmı yokmu onu arar. Varsa index numarasını yazdırır. Yoksa -1 yazar.

//val = val[1];// val değişkeninde kaçıncı harfi yazdırmak istersek index numarasını yazarak alabiliriz.

//string length
//val = val.length; //val nesnesinin boşluklarda bir karakter olarak algılayarak kaç karakterden oluştuğunu yazar.

val =hobbies.split(' ')//Yukarıda yer alan hobbies nesnesindeki yazıları boşluk ifadesi baz alınarak ayırıp bir dizi gibi göstermeye yarar.

console.log(val);
console.log(typeof val);