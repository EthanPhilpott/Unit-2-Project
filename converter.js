function DecToBin (number) {
    let remainder;
    let final = '';
    while (number != 0) {
        if (number % 2 == 1) {
            final += '1';
        } else {
            final += '0';
        }
        number = Math.floor(number / 2);
    }
    return final;
}

console.log(DecToBin(12))