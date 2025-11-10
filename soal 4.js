// 1. toLowercase()
    // input: nilai string dengan semua alfabet besar
    // output: nilai string menghailkan semua alfabet menjadi kecil
    // kegunaan: toLowerCase() digunakan untuk mengecilkan semua karakter alfabet
const originalString = "ABCDEFG";
const lowercaseString = originalString.toLowerCase();
console.log("1. toLowercase()")
console.log(originalString);
console.log(lowercaseString);
console.log("=========================")

// 2. toUppercase()
    // input: nilai string dengan semua alfabet kecil
    // output: nilai string menghasilkan semua alfabet menjadi besar
    // kegunaan: toLowerCase() digunakan untuk membesarkan semua karakter alfabet
const oriString = "abcdefg";
const uppercaseString = oriString.toUpperCase();
console.log("2. toUppercase()")
console.log(oriString);
console.log(uppercaseString);
console.log("=========================")

// 3. split()
    // input: nilai string yang memiliki spasi
    // output: array yang berisi elemen yang dipisah berdasarkan spasi
    // kegunaan: spilt() digunakan untuk membagi string menjadi daftar substring kemudian di tempatkan kedalam array 
const names = "Hallo nama saya bian berasal dari bandung";
const splitNames = names.split(" "); 
console.log("3. split()");
console.log(names);
console.log(splitNames);
console.log("=========================");

// 4. forEach()
    // input: array yang memiliki beberapa elemen
    // output: tidak menghasilkan array baru, hanya menjalankan callback pada setiap elemen
    // kegunaan: forEach() digunakan untuk melakukan operasi untuk setiap elemen dalam array
const numbers = [10, 20, 30];
console.log("4. forEach()");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
console.log("=========================");

// 5. toString
    // input: array atau number
    // output: nilai string dari array atau number
    // kegunaan: toString() digunakan untuk mengubah array atau umber menjadi string
const angka = [1, 2, 3, 4, 5];
const stringAngka = angka.toString();
console.log("5. toString()");
console.log(angka);
console.log(stringAngka);
console.log("=========================");