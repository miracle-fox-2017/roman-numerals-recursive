function to_roman(num){
    // your implementation code here
    var hasil="";
    // var unqNumber={
    //     "M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1
    // };
    var unqDecimal=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var unqRoman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    if(num === 0){
        return hasil;
    }else{
        // for(i in unqNumber){
        //     if(num >= unqNumber[i]){
        //         num-=unqNumber[i];
        //         return hasil+=i + to_roman(num);
        //     }
        // }
        for(var i=0;i < unqDecimal.length;i++){
            if(num >= unqDecimal[i]){
                num-=unqDecimal[i];
                return hasil+=unqRoman[i] + to_roman(num);
            }
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
