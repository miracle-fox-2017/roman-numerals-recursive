function to_roman (num) {
  let temp = '';

  if (num.toString().length > 4 || (num.toString().length === 4 && +num.toString().charAt(0) > 3))
  {
    return "out of range"
  }

  if (num.toString().length === 1)
  {
    if (num <= 3)
    {
      for (let i = 0; i < num; i++)
      {
        console.log("masuk pertambahan I");
        temp += 'I';
      }
    }
    if (num === 4)
    {
      temp += "IV";
    }
    if (num >= 5 & num < 9)
    {
      temp += "V";
      for (let i = 0; i < (num - 5); i++)
      {
        temp += "I"
      }
    }
    if (num === 9)
    {
      temp += "IX"
    }
    return temp;
  }

  if (num.toString().length === 4)
  {
    for (let i = 0; i < Math.floor(num/1000); i++)
    {
      temp += "M";
    }
    return temp + to_roman(num.toString().slice(1));
  }

  if (num.toString().length === 3)
  {
    let ratusan = Math.floor(num / 100);
    for (let i = 0; i < ratusan; i++)
    {
      if (ratusan <= 3)
      {
        temp += "C";
      }
    }
    if (ratusan === 4)
    {
      temp += "CD";
    }
    if (ratusan >= 5 && ratusan < 9)
    {
      temp += "D";
      for (let i = 0; i < (ratusan - 5); i++)
      {
        temp += "C";
      }
    }
    if (ratusan === 9)
    {
      temp += "CM";
    }
    return temp + to_roman(num.toString().slice(1));
  }

  if (num.toString().length === 2)
  {
    let puluhan = Math.floor(num / 10) % 10;
    for (let i = 0; i < puluhan; i++)
    {
      if (puluhan <= 3)
      {
        temp += "X";
      }
    }
    if (puluhan === 4)
    {
      temp += "XL";
    }
    if (puluhan >= 5 && puluhan < 9)
    {
      temp += "L";
      for (let i = 0; i < (puluhan - 5); i++)
      {
        temp += "X";
      }
    }
    if (puluhan === 9)
    {
      temp += "XC";
    }
    return temp + to_roman(num.toString().slice(1));
  }

}

// Drive code
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|———————')
// console.log('4     | IV       | ', to_roman(4))
// console.log('9     | IX       | ', to_roman(9))
// console.log('13    | XIII     | ', to_roman(13))
// console.log('1453  | MCDLIII  | ', to_roman(1453))
// console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log(to_roman(1646));
