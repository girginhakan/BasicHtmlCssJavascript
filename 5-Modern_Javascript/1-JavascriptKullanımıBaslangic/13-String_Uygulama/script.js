// Demo : Strings

var sentence = " Template Literals or template string is the ability Have multi-line strings without any funny business. ";


var url = "http://hakangirgin.com/modern javascript KURSU sıfırdan ileri seviye";


//cümle kaç karakterdir?

console.log(sentence.length);
console.log(typeof sentence);

//cümle kaç kelimeden oluşur

console.log(sentence.trim().split(" ").length);


//tüm cümleyi küçük harfe çevir

console.log(sentence.toLocaleLowerCase());

//tüm cümleyi büyük harfe çevirir.

console.log(sentence.toUpperCase());

//cümlenin başındaki ve sonundaki boşlukları siliniz.


console.log(sentence.trim());

//cümleden"-" karakterini silin

console.log(sentence.replace("-",""));


//url hangi rotokolü kullanmaktadır. (http,https)

console.log(url.startsWith("http"))//http ilemi başlıyor ona bakmak için kullanılır true ve false döndürür.
console.log(url.startsWith("https"));


//url, ".com" ifadesini içeriyor mu?

console.log(url.indexOf(".com"));//varsa kaçıncı indexde olduğunu söyler.
console.log(url.includes(".com"));//varsa true yoksa false döndürür.


 //url ifadesini geçerli bir url haline getiriniz(boşluklar alınacak,türkçe karakterler değişecek vs.)

 console.log(url.toLocaleLowerCase()
                .replace(/ /g,"-")
                .replace(/ı/g,"i")
                .replace(/ü/g,"u")
 );
