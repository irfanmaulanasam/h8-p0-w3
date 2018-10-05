function balikKata(kata) {
  //membalikkan kata dari kalimat diambil dari index terakhir
  var kataTerbalik = '';

  for(var i = kata.length - 1; i >= 0; i--) {
    //var i mewakili index untuk indentasi kalimat
    //kata ialah wadah variabel string yang didapat dari console log function 
    //.length-1 digunakan untuk mengecek index tapi dimulai dari belakang
    kataTerbalik += kata[i];
    // return kataTerbalik; ===>return tidak ditempatkan di dalam (for)looping karena hanya akan terjadi looping sekali pada index terakhir pada kaliamt
  }
  return kataTerbalik;//return dimunculkan setelah for(looping) karena harus melakukan proses dari kalimat
}
//return kataTerbalik;
// TEST CASES
console.log(balikKata('Hello World!'));