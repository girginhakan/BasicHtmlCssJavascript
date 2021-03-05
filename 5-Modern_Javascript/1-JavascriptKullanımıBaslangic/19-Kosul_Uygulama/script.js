// var trafigeCikis = new Date("04/20/2014");
// trafigeCikis.setHours(0,0,0,0);

// var trafikteMs = Date.now() - trafigeCikis.getTime();

// var trafiktekiGun =Math.floor(trafikteMs /(1000*60*60*24));


// console.log(`Aracın trafikteki gün sayısı : ${trafiktekiGun}`);


// if (trafiktekiGun<=365){
//     console.log("1.Servis bakım süreniz gelmiştir.");
// }else if(trafiktekiGun<=365*2){
//     console.log("2.Bakım süreniz gelmiştir.");
// }else if(trafiktekiGun<=365*3){
//     console.log("3.bakım süreniz gelmiştir.");
// }else{
//     console.log("Bilinmeyen gün");
// }



// console.log(trafiktekiGun);



var result = prompt("Who is there?");


if(result == 'cancel'){
    console.log('cancelled');
}else if(result == 'Admin'){
    console.log('Welcome Admin');

    var password = prompt("enter your password");

    if(password == 'cancel'){
        console.log('cancelled');
    }else if(password =='1234'){
        console.log('Hoşgeldiniz Admin');
    }else{
        console.log("Wrong password");
    }


}else{
    console.log('I don\'t now');
}
