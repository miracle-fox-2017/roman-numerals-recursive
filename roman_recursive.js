function to_roman (num) {
  // var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  // var arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var hasil = '';
  // console.log('Numbernya ' + num);
  if(num === 0){
    return '';
  }
  if(num >= 1000){
    return 'M' + to_roman(num - 1000);
  }
  if(1000 > num && num >= 900){
    return 'CM' + to_roman(num - 900);
  }
  if(900 > num && num >= 500){
    return 'D' + to_roman(num - 500);
  }
    if(500 > num && num >= 400){
    return 'CD' + to_roman(num - 400);
  }
    if(400 > num && num >= 100){
    return 'C' + to_roman(num - 100);
  }
    if(100 > num && num >= 90){
    return 'XC' + to_roman(num - 90);
  }
    if(90 > num && num >= 50){
    return 'L' + to_roman(num - 50);
  }
    if(50 > num && num >= 40){
    return 'XL' + to_roman(num - 40);
  }
    if(40 > num && num >= 10){
    return 'X' + to_roman(num - 10);
  }
    if(10 > num && num >= 9){
    return 'IX' + to_roman(num - 9);
  }
    if(9 > num && num >= 5){
    return 'V' + to_roman(num - 5);
  }
    if(5 > num && num >= 4){
    return 'IV' + to_roman(num - 4);
  }
    if(4 > num){
    return 'I' + to_roman(num - 1);
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
