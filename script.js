function monit(val){                                                        //monitore yazdirmayi saglayan fonksiyon
    document.getElementById("monitor").value+=val;                          //monitor ID li objeye gelen degerleri ekliyor.
}                                                                           //yani halihazırda 3 yazılıysa 5 e bastiginizda
                                                                            //3 u silip sifirdan yazmak yerine yanindan devam ediyor
function temizle(){
    document.getElementById("monitor").value = "";
}

function hesapla()                                                          /*4 islem*/
{
    let x = document.getElementById("monitor").value;                       //monitor objesindeki degeri alip
    let y = eval(x);                                                        //x e esitleyip daha sonrasinde eval() adli
    document.getElementById("monitor").value = y;                           //Javascript metoduyla temel hesaplamalar yapiliyor.
}                                                                           //ve bu deger tekrar monitor objesine donduruluyor

function mutlak(){                                                          /*Mutlak deger*/
    let x = document.getElementById("monitor").value;
    let y = Math.abs(x);                                                    //Math sınıfı metodu olan abs() ile mutlak deger aliniyor
    document.getElementById("monitor").value = y;                           //ve bu deger tekrar monitor objesine donduruluyor
}

function yuzde(){                                                           /* Yuzde hesaplayıcı */
    let x = document.getElementById("monitor").value;                       //monitordeki degeri x e esitleyip daha sonrasinda y ye
    let y = (x/100);                                                        //x'i 100 e bolup esitliyor.
    document.getElementById("monitor").value = y;                           //ve bu deger tekrar monitor objesine donduruluyor
}

function logaritma(){                                                      /*10 tabanında logaritma alma */
    let x = document.getElementById("monitor").value;                      //Burada da Math Sınıfından 10 tabanlı logaritma metodu kullanıldı                      
    let y = Math.log10(x);
    document.getElementById("monitor").value = y;                          //ve bu deger tekrar monitor objesine donduruldu
}

function sinus(){                                                         /*Sinüs hesaplayıcı*/
    let x = document.getElementById("monitor").value;                     //Math sınıfı Sine(sinus) metodu kullanildi ancak,
    let y = Math.sin(x*Math.PI/180);                                      /* Pi/180 yapıldı çünkü derece üzerinden hesaplanması istendi */
    document.getElementById("monitor").value = y;                         //ve bu deger tekrar monitor objesine donduruldu
}

function kosinus(){                                                       /*Kosinüs hesaplayıcı*/
    let x = document.getElementById("monitor").value;                     //Yukaridaki fonksiyonla ayni seyler uygulandi
    let y = Math.cos(x*Math.PI/180);  
    document.getElementById("monitor").value = y;
}

function kok(){                                                           /*Kök hesaplayıcı*/
    let x = document.getElementById("monitor").value;                     //Math sınıfı Square Root(sqrt) metodu kullanildi
    let y = Math.sqrt(x);                                                 //y degeri x in sqrt sine esitlendi
    document.getElementById("monitor").value = y;                         //ve bu deger tekrar monitor objesine donduruldu
}

function ikius(){                                                        /*2 üzeri üs hesaplayıcı*/
    let x = document.getElementById("monitor").value;                    //Math sınıfı power metodu kullanildi
    let y = Math.pow(2,x);                                               //2 tabanli x uslu sayi y ye esitlendi
    document.getElementById("monitor").value = y;                        //ve bu deger tekrar monitor objesine donduruldu
}

function onus(){                                                         /*10 üzeri üs hesaplayıcı*/
    let x = document.getElementById("monitor").value;                    //Yukaridaki fonksiyonla ayni seyler uygulandi
    let y = Math.pow(10,x);
    document.getElementById("monitor").value = y;
}

function fonk1(){                                                       /*Parola olusturucu*/
    let x = document.getElementById("monitor").value;
    var y = '';
    var z = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ' +                           /*Üç farklı 'string' halinde, büyük ve küçük formatlarında alfabemiz*/ 
            'abcçdefgğhıijklmnoöprsştuüvyz' +                           /*ve rakamlar yazıldı.*/
            '0123456789';
              
    for (let i = 1; i <= x; i++) {
        var a = Math.floor(Math.random()* z.length + 1);             /*random sınıfı kullanılarak, stringlerden birinin içinden rastgele bir*/
        y += z.charAt(a);                                            /*karakter seçildi ve döngü içinde kullanıcı tarafından girilen sayı kadar */
    }                                                                /*dönerek her döngüde bir karakter eklendi. */
    document.getElementById("monitor").value = y;                    /*Ekrana yazdırıldı. */
}

function fonk2(){                                                          /* Çift mi , Tek mi  fonksiyonu*/
    let x = document.getElementById("monitor").value;
    if(x%2 == 0){                                                           /*Sayının 2 ile modu alındı, kalan 0 ise çifttir yani 0 donecek*/
        let y = 0;
        document.getElementById("monitor").value = y;
    }
    else if(x%2 == 1){                                                      /*Sayının 2 ile modu alındı, kalan 1 ise tektir yani 1 donecek*/
        let y = 1;
        document.getElementById("monitor").value = y;
    }
}

function corum(){                                                           /*Hesap makinesine ufak bir sürpriz yerleştirildi :) */
    let x = "Leblebi";
    document.getElementById("monitor").value = x;
}