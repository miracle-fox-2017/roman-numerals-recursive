function to_roman(num) {
  let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'M'];
  let angka = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 1000]

  if (num === 0) {
    return 'Tidak ada'
  }

  for (let i = angka.length - 1; i >= 0; i--) {
    if (num === angka[i]) {
      return roman[i]
    } else if (num >= angka[i]) {
      return roman[i] + to_roman(num - angka[i])
    }
  }

}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
