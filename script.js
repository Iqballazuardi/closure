// `closures adalah sebuah function ketika memiliki
// akses ke parent secope-nya, meskipun parent scope-nya
// sudah selesai di eksekusi

// --w3school`

// `closure adalah function di kembalikan oleh function lain
// , yang memiliki akses ke lingkungan saat ia di ciptakan

// --code fellow`

// `closure merupakan kombinasi antara function dan lingkungan leksikal(lexical scope)
// di dalam function tersebut

// --MDN(Mozila)`

// `closure adalah sebuah functionnyang sebelum nya sudah memiliki data,
// hasil dari function yang lain

// --Techstih`


// kenapa menggunakan closure
// 1. untuk mengunakan function factories
// 2. untuk membuat private method




// `( LEXICAL SCOPE (CLOSURE))`

// function init(){
//     let nama = 'iqbal lazuardi' // local variabel
//     function tampilNama(){ // child/inner function (closure*)
//         console.log(nama) // akses ke parent variabel
//     }
//     tampilNama()
// }
// init()


// FUNCTION FACTORIES(CLOSURE)


// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`halo ${nama} selamat ${waktu}, semoga harimu menyenangkan`)
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');



// selamatPagi('iqbal lazuardi')
// selamatSiang('maliko')
// selamatMalam(`riko pernando`)


// PRIVATE METHOD(CLOSURE) ini menggunakan imetdetli invok function

let counter = 0;

let add = (function(){

    return function(){
        
        return ++counter;
    }
})()

console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())

