function to_roman (num) {
  // your implementation code here
  const arabicNumeral = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  const romanNumeral  = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']

  let result = ''

  for(let i=arabicNumeral.length; i>=0; i--){
    while(num >= arabicNumeral[i]){
      result += romanNumeral[i]
      to_roman(num-=arabicNumeral[i])
    }
  }
  return result
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
