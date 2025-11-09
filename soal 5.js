function number(n){
    for (let i = 0; i <= n; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

let angka = 5
number(angka)