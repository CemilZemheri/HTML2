x=15
ad="cemil"
yaş=40
console.log(ad);
console.log(yaş);


// JAVASCRIPT DEĞİŞKENLER
// const let
// ES6dan sonra gelen yapılar
// Değişken tanımlama için kullanılır


//! CONST değiştirilemez
// const constant sabit
const tckimlik=121234452135145


// ! LET değiştirilebilir
let toplam=0
x=60
y=70
toplam=x+y
console.log(toplam);

// GLOBAL ALAN
// program içinde her ortamdan ulaşılabilen alandır
// LOKAL ALAN
// bir blok içidir. süslü parantezler ile ifade edilen bloklardır. if ,while,for blokları gibi
// Burası global alan
const sayı=5

{
    // Burası lokal alan
console.log(sayı);
const pi=3.14
console.log(pi);

}

// LOKALDE yazdığımızı genelde göremedik.

// VAR variables değişkenler
//      her yerden erişilebilir.yeniden tanımlanabilir. O nedenle kullanmıyoruz.
var number=90

{
    console.log(number)
    var number=50
}
console.log(number+15);

