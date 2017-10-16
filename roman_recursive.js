function to_roman (num) {
  // your implementation code here
  let hasil = '';
  // let strnum = num.toString();
  let angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let romawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

  if (num == 0){
    return hasil
  }

      for ( let i = 0; i < romawi.length; i++){

          if  (num >= angka[i]){

            hasil += romawi[i];
            // console.log(hasil);
            num -= angka[i];
            return  hasil + to_roman (num)
          }
      }
  }

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(7))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(20))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
