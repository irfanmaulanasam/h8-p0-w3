function tentukanDeretAritmatika(arr) {
    //deret aritmatika adalah sebuah penjumlahan angka yang membentuk indek
    //deret aritmatika bersifat tetap dan statis pada saat penjumlahannnya,
    //ketika deret aritmatika pada penjumlahannya mengalami perubahan yang tidak sesuai dengan penjumlahan sebelumnya 
    //maka deretan tersebut dianggap salah karena tidak sesuai dengan perosedur
    var deret = arr[1] - arr[0] ;
    //variabel deret digunakan sebagai value untuk mengetahui angka yang ditambahkan pada setiap deret
    var jarak = 0 ;
    //var jarak dimulai dari nol untuk melihat kondisi penjumlahan apakah berjalan sesuai dengan method ataukah tidak
    for( i = 0 ; i < arr.length -1 ; i++ ){
        jarak = arr[i+1] - arr[i] ;
    }return deret === jarak;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false