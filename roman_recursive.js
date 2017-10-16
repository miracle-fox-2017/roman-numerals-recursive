function to_roman (num) {
  // your implementation code here
  //if length = 4
  //do ribuan
  //if length = 3
  //do ratusan
  //if length = 2
  //do puluhan
  //if length = 1
  //do satuan

  //array
  var roman1 = ["I", "V", "X"];
  var roman2 = ["X", "L", "C"];
  var roman3 = ["C", "D", "M"];

  if(num<10){
    //do satuan;
    //convert satuan
    var satuan = num;
    var hasil = "";
    if(satuan<=3){
      for(var i = 0; i<satuan; i++){
        hasil += roman1[0];
      }
    }
    if(satuan==4){
      hasil = roman1[0]+roman1[1];
    }
    if(satuan>4 && satuan<9){
      hasil += roman1[1];
      for(var i = 5; i<satuan; i++){
        hasil += roman1[0];
      }
    }
    if(satuan==9){
      hasil=roman1[0]+roman1[2];
    }
    //return satuan
    return hasil;

  } else {
    //cek ribuan/ratusan/puluhan
    var cek = String(num).length;
    //ribuan
    if(cek==4){
      //convert ribuan
      var ribuan = Number(String(num)[0]);
      var hasil = "";
      if(ribuan<=3){
        for(var i = 0; i<ribuan; i++){
          hasil += roman3[2];
        }
      }
      //return join + to_roman
      return hasil + to_roman(num%1000);
    }

    //ratusan
    else if(cek==3){
      //convert ratusan
      var ratusan = Number(String(num)[0]);
      var hasil = "";
      if(ratusan<=3){
        for(var i = 0; i<ratusan; i++){
          hasil += roman3[0];
        }
      }
      if(ratusan==4){
        hasil = roman3[0]+roman3[1];
      }
      if(ratusan>4 && ratusan<9){
        hasil += roman3[1];
        for(var i = 5; i<ratusan; i++){
          hasil += roman3[0];
        }
      }
      if(ratusan==9){
        hasil = roman3[0]+roman3[2];
      }
      //return join + to_roman
      return hasil + to_roman(num%100);
    }

    //puluhan
    else if(cek==2){
      //ambil angka
      var puluhan = Number(String(num)[0]);
      var hasil = "";

      //convert puluhan
      if(puluhan<=3){
        for(var i = 0; i<puluhan; i++){
          hasil += roman2[0];
        }
      }
      if(puluhan==4){
        hasil = roman2[0]+roman2[1];
      }
      if(puluhan>4 && puluhan<9){
        hasil += roman2[1];
        for(var i = 5; i<puluhan; i++){
          hasil += roman2[0];
        }
      }
      if(puluhan==9){
        hasil = roman2[0]+roman2[2];
      }

      //return join + to_roman
      return hasil + to_roman(num%10);
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
