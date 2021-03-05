var num = 15.123456789;

//toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3));

//Ondalıklı kısmı 3 basamakta sınırla

console.log(num.toFixed(3));

//en yakın sayıya yuvarla
console.log(Math.round(num));

//Aşağıya yuvarla
console.log(Math.floor(num));

//Yukarı yuvarla
console.log(Math.ceil(num));

//1,2,10,56,20 sayıları arasından en küçüğünü ve en büyüğünü göster
console.log(Math.min(1,2,10,56,20));//en küçüğü

console.log(Math.max(1,2,10,56,20));//en büyüğü

// 50 ile 100 arasında rastgele sayı seçme methodu
var min = 50;
var max = 100
console.log(min+Math.random()*(max-min));


//Bir personelin yatığı mesaiye göre aldığı maaş hesaplanması

//Ağustos ayı bürüt maaş hesaplanması
var brutMaas = 3700;
var brutMesai = 10.3;

var agustMesaiSaat = 42;


var totalBrutMaas = brutMaas + (brutMesai*agustMesaiSaat);
console.log(totalBrutMaas); 


//Ağustos ayı net maaş hesaplanması

var agustNetMaas = (totalBrutMaas * 75)/100;
console.log(agustNetMaas.toFixed(3));


