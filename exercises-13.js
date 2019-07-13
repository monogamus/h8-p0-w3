// Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  var index1 = 0;
  var index2 = 0;
  var temp = 0;
  var arrX = [];
  
  if(arr.indexOf("x") === -1){
    return 0
  }
  else{
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === "x"){
      index1 = i
      arrX.push(index1)
      }
      else if(arr[i] === "o"){
       index2 = i
      }
   
      var hasil= [];
      for(var j = 0; j < arrX.length; j++){
        temp = Math.abs(index2 - arrX[j]);
        hasil.push(temp)
        hasil.sort()
      }
    }
      return hasil[0]
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2