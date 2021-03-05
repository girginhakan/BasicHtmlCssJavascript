// Selecting Elements

// *** Single Elements

//sayfada bir id ye göre çağırma işlemi yaparken kullanılır.
// document.getelementById()  
// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;


//yukarıda çağıdığımız header kısmının style kısmına ulaşmak için kullanılır.
// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';
// // val.style.display='none';


//header kısmını my ToDo App yazısına değiştirmeye yara r.
// document.getElementById('header').innerText='my ToDo App';


//burada b etiketinin bir anlamı olmaz ekranda '<b>my ToDo App</b>' yazar.
// document.getElementById('header').innerText='<b>my ToDo App</b>';


//Ancak .innerHTML kullanırsak bu sefer b etiketinin bir anlamı olur ve bold şekilde my ToDo app yazar.
// document.getElementById('header').innerHTML='<b>my ToDo App</b>';
//console.log(val);


//document üzerinde eleman seçmek için farklı bir yöntem
// document.querySelector()

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));

document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(2)').style.color='yellow';
document.querySelector('li:nth-child(3)').textContent='task item';
document.querySelector('li:nth-child(4)').textContent='task item';

// document.querySelector('li').className='list-group-item list-group-item-primary';


//sayfa üzerinde karşısına çıkan ilk li etiketine bir class eklemek için kullanılır.
document.querySelector('li').classList.add('active');

