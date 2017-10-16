function to_roman (num) {
  // your implementation code here
  var angkaArab = [ 1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1 ]; 
  var roman = 	 ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var result = '';

  if (num === 0) {
  	return '';
  }

  for (var i = 0; i < angkaArab.length; i++) {
  	if (num >= angkaArab[i]) { 	// 1453 >= 1000 -> num = 453, result = M; 453 >= 400 -> num = 53, result = MCD; 53 >= 50 -> num = 3, result = MCDL; 3 >= 1 -> num = 2, result = MCDLI; 2 >= 1 -> num = 1, result = MCDLII; 1 >= 1 -> num = 0, result = MCDLIII; 0 -> '' 
  		num = num - angkaArab[i];
  		result = result + roman[i];
  	}
  }

  return result + to_roman(num);
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
