// Mengakses Nilai Dalam Array
function balikString(string){
  
  var dumBalik="";
  
  for(var i=string.length-1; i>=0; i--){
    dumBalik=dumBalik+string[i];
  }
  return dumBalik;
}

console.log(balikString("hello world!"));