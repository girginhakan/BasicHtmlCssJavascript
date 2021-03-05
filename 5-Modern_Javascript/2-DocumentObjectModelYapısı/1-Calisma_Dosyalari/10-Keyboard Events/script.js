// Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');


//keydown klavyeden tuşa basılı tuttuğumuzda tettiklenir.
// input.addEventListener('keydown',eventHandler);

//keyup ise basılı olan tuşu bıraktığımızda tetiklenir.
// input.addEventListener('keyup',eventHandler);

//kullanıcının ne yazdığı bilgisini öğrenmemize yarar. Ancak keydown olayında öğrenilmez tuşa basmayı bıraktıktan sonra bilgisini öğrenebiliriz.
// input.addEventListener('keypress',eventHandler);

//seçilen inputa tıklandığı anda tetiklenir.
// input.addEventListener('focus',eventHandler);

//mause ile inputa focus oluruz mause u başka biyere tıkladığımızda blur olayı tetiklenir.
// input.addEventListener('blur',eventHandler);

//input içerisine yazılan bir yazıyı ctrl-x ile kesme işlemi yapıldığında tetiklenir.
// input.addEventListener('cut',eventHandler);

//input içerisine bir yapıştırma yani ctrl-v işlemi gerçekleşirse tetiklenir.
// input.addEventListener('paste',eventHandler);

//inut içerisine yazılan bir metini seçtiğimiz an tetiklenir.
// input.addEventListener('select',eventHandler);

// form.addEventListener('submit',eventHandler);

//
select.addEventListener('change',eventHandler);

function eventHandler(e){
       console.log('event type '+ e.type);
         //key code ile kullanıcı hangi tuşa bastığı bilgisini almak için kullanılır.
       // console.log('key code :'+e.keyCode);
    
       console.log('value :'+e.target.value);

       //focus olayı gerçekleştiğinde input nesnesinin arka planı boyanabilir.
    // e.target.style.backgroundColor='yellow';

    e.preventDefault();
}