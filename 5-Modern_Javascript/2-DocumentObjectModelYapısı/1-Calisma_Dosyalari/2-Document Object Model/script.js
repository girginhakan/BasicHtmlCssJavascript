let val;

val = window.document;//sayfanın herşeyi önümüze gelir.
val = document.all;//sayfa üzerindeki bütün etiketler collection şeklinde gelir.
val = document.all.length;//sayfa üzerindeki bütün elemanların sayısını gösterir.
val = document.all[10];//sayfa üzerindeki elemanlardan 10. indexteki elemanı gösterir.
val = document.head;//sayfa üzerindeki head kısmını getirir.
val = document.body;//sayfa üzerindeki body kısmını gösterir.
val = document.anchors;//sayfa üzerindeki bütün linkleri getirir. a etiketi şeklinde olanları
val = document.URL;//sayfanın şuankiurlsini alırız.
val = document.domain;//sayfanın domainini alırız.
val = document.images;//sayfadaki bütün imagesleri gösterir.
val = document.title;//sayfanın başlığını alabiliriz.
val = document.forms;//sayfada bulunan bütün formları alırız.
val = document.forms[0];//sayfada bulunan formlardan hangi formu alacağımızı gösterir.
val = document.forms[0].id;//sayfada bulunan  0.indexdeki formun id bilgisini alabiliriz.
val = document.forms[0].method;//sayfada bulunan 0.indexdeki formun metodlarını alabiliriz.
val = document.forms[0].action;//sayfada bulunan 0. indexdeki formun action bilgisini alabiliriz.
val = document.scripts;//sayfada bulunan bütün scriptleri alabiliriz.
val = document.scripts[2];//sayfada bulunan 2.indexdeki scripti gösterir.
val = document.scripts[2].getAttribute('src');//sayfada bulun 2.indexdeki scriptin Attribute vilgisini alabiliriz.


console.log(val);