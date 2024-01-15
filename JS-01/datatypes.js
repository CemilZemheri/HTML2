// data types
// 2 türdür.1.primitive 2.non-primitive(referansa dayalı) object type
// 1.primitive: tek değer tutar.küçük değerler tutar.
// primitiveler: null,undefined,boolean,number,string,bigint
// non-primitive: object, array
x=15
console.log(typeof x);

/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x=15.34
console.log(typeof x)

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas=40
sayı=56.87
console.log(yas);
sonuc=(sayı*5)+6
console.log(sonuc);
const pi=Math.PI
console.log(pi);
// Ondalıklı kısmı yuvarlamak için kullanılan yöntemler
// round

let yuvarlanmışsonuç=Math.round(sonuc)
console.log(yuvarlanmışsonuç);

// trunc
// sayının tam kısmını almamızı sağlayan yöntem
let truncsonuc=Math.trunc(sonuc)
console.log(truncsonuc);

// virgülden sonra gelen ondalık kısımda kaç hane göstermesini istiyorsanız tofixed (sayı) kullanıyoruz.

let fixedsonuc=sonuc.toFixed(2)
console.log(fixedsonuc);


// RANDOM METODU rastgele bir sayı üretmek için kullanılır.
// 0-1 arasında bir sayı üretir.

console.clear()
console.clear();
console.log(Math.round(Math.random()*100));
console.log(Math.random());
console.log(Math.pow(5,3));
console.log(Math.sqrt(144));

