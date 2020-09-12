"use strict"

function DecToBin (number) {
    let final = '';

    while (number > 0) {
      final += String(number % 2);
      number = Math.floor(number / 2);
    }

    for (let i = 0; final.length % 8 != 0; i++) {
      final += '0';
    }

    let lenBefSpace = final.length
    for (let i = 4; i < lenBefSpace + lenBefSpace/4; i+=5) {
      final = final.substr(0, i) + ' ' + final.substr(i, final.length)
    }

    return final.split('').reverse().join("");

}

// console.log(DecToBin(128))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function DecToHex (number) {
  let final = '';
  while (number != 0) {
    switch (number % 16) {
      case 10:
        final += 'A';
        break;
      case 11:
        final += 'B';
        break;
      case 12:
        final += 'C';
        break;
      case 13:
        final += 'D';
        break;
      case 14:
        final += 'E';
        break;
      case 15:
        final += 'F';
        break;
      default:
        final += String(number % 16);
        break;
    }
    number = Math.floor(number / 16);
  }
  return final.split('').reverse().join('');
}

// console.log(DecToHex(125));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function HexToDec (hex) {
  let final = 0;
  for (let i = 0; i < hex.length; i++) {
    switch (hex[i]) {
      case 'A':
        final += 10 * 16**(hex.length - i - 1);
        break;
      case 'B':
        final += 11 * 16**(hex.length - i - 1);
        break;
      case 'C':
        final += 12 * 16**(hex.length - i - 1);
        break;
      case 'D':
        final += 13 * 16**(hex.length - i - 1);
        break;
      case 'E':
        final += 14 * 16**(hex.length - i - 1);
        break;
      case 'F':
        final += 15 * 16**(hex.length - i - 1);
        break;
      default:
        final += hex[i] * 16**(hex.length - i - 1);
    }
  }
  return final
}

// console.log(HexToDec("7D"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function BinToDec (bin) {
  let final = 0;
  for (let i = 0; i < bin.length; i++) {
    final += bin[i] * 2**(bin.length - i - 1)
  }
  return final
}

// console.log(BinToDec("0001 1000"))