function palindrom(str){
    const revers = str.split("").reverse().join("")

    if (str === revers){
        console.log("Ini Palindrom")
    } else {
        console.log("Ini bukan Palindrom")
    }
}

palindrom("madam")
palindrom("nina")