function to_roman (num) {
  // menerima angka 1 - 3000, dan me return string angka romawi
  var hasil = '';
  var arabic = [1000, 900, 500, 400, 100,90, 50, 40, 10, 9, 5, 4, 1]
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL' ,'X', 'IX', 'V', 'IV', 'I']
  if(num === 0){
    return ''
  }
  for(var i = 0; i < arabic.length; i++){
    if(num >= arabic[i]){
      hasil += romawi[i]
      num -= arabic[i]
    }
  }
  return hasil + to_roman(num) //pertama kita ambil si hasil yang memenuhi kondisi >= arabic[i]
  // lalu rekursif terus sisanya dan kurangi (pada baris ke 12) hingga kondisi stopper
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
