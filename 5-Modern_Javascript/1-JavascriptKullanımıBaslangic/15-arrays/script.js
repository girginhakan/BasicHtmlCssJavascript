// Arrays

let names = ['çınar','sena','ada','yiğit'];
let years = [2017,1970,1990,1998];
let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];

// // get array item
// console.log(names[0])//dizinin bir elemanını alak için kullanılır.
// console.log(names[3])

// // set array item
// names[names.length]='emel';//diziye eleman eklemek için  kullanılır.

// // add item
// years.push(1986);//diziye array methodları kullanılarak dizinin sonuna eleman eklemek için kullanılır.
// years.unshift(1986); //eklenen elemanı en başa eklemek istenirse kullanılır.

// // remove item
// years.pop();//years dizinin son elemanı silinir.
// years.shift();//years dizisinin ilk elemnı silinir.

// //indexof
// let index = names.indexOf('ada');
// console.log(' index : '+index);  //'' içerisindeki ifadenin dizide varmı varsada kaçıncı indexde olduğunu gösterir.

// // reverse
// names.reverse();//dizideki tüm elemanların yeri değişir. sondaki eleman 0. index olacak şekilde tekrar sıralanır.

// // sort
// years.sort();//dizi içerisindeki elemanları sayısalsa küçükten büyüğe, string tipinde ise alfabetik sıraya göre sıralar.

// //concat
// let val = years.concat(names);//years dizisinin sonuna names dizi eklenmiş bir şekilde yeni bir dizi oluşturur.
// console.log(val);

// splice
// console.log(names);
// names.splice(0,1);//baştaki dizinin kaçıncı olduğunu virgülden sonrada kaç eleman sileceğini gösterir.

function over18(year){
    let age = 2018 - year;
    return age>=18;
}

// find
// let val = years.find(over18);

// filter
let val = years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
