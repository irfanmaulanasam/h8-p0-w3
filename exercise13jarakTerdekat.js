function targetTerdekat(arr) {
   //menentukan jarak setiap indeks dalam sebuah array, 
   //function ini digunakan untuk mengukur jarak index x ke o maupun sebaliknya.
   //apabila dalam sebuah array terdiri dari beberapa variabel dan setiap variabel dihitung satu,
   //maka indeks bisa direpresentasikan sebagai jarak yang berjumlah 1, 
   //dan index terdekat yang terdapat pada setiap array akan dihitung untuk menentukan berapa banyak variabel yang harus dilewati oleh indeks x dan indeks o
   //semakin kecil jumlah indeks maka semakin dekat pula indeks yang harus dilewati x dan o untuk saling bertemu
    var indexO = arr.indexOf("o")
    
    var jarak = 0
    
    var jarakTerdekat = arr.length
  
  if ( arr .indexOf ("x") === -1 ) {

    return 0

  }
  
  for ( var i = 0 ; i < arr.length ; i++ ) {
    
    if ( arr [i] === "x" ) {
    
      jarak = Math.abs (i - indexO)
    
      if ( jarak < jarakTerdekat ) {
    
        jarakTerdekat = jarak
    
      }
    }
  }
  
  return jarakTerdekat

}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2