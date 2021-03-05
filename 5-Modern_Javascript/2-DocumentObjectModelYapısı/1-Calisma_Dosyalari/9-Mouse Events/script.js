// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// double click
// btn.addEventListener('dblclick',eventHandler);

//mouse down//ilgili butona tıkladığınızda çalışır.
// btn.addEventListener('mousedown',eventHandler);

// //mouse up//ilgili mause tıkladığınızda çalışmaz tıklamayı bıraktığınızda çalışır.

// btn.addEventListener('mouseup',eventHandler);

// // mouseenter//mause ul nessnesinin içerisine girdiğinde tetiklenir.

// ul.addEventListener('mouseenter',eventHandler);

// // mouseleave//mauseenter olayı ile tetiklenen mause ul nesnesinin dışına çıktığında tetiklenir.

// ul.addEventListener('mouseleave',eventHandler);

// // mouseover
// ul.addEventListener('mouseover',eventHandler);
// // mouseout
// ul.addEventListener('mouseout',eventHandler);

// mouse move//mause un koordinatlarını almaya yarar.
const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;

}