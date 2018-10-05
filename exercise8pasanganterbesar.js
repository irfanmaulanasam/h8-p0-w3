function pasanganTerbesar(num) {
  //memecah angka supaya ketemu pemasangan angka yang disampingnya menggunakan metode
  //merubah num menjadi string dan di split dan dimasukkan ke dalam array
    var arr = num .toString() .split('');
    var hasil = [];
    //looping for pertama digunakan memasangkan angka yang akan diurutkan dari hasil split var arr  
    for ( var i = 0; i < arr.length - 1; i++) {
      hasil[i] = Number( arr[i] + arr[i + 1] );
    }
    var angkaBesar = hasil [0];
    //looping for kedua digunakan sebagai hasil tampungan dari penggabungan angka pada looping kedua
    for ( var j = 1 ; j < hasil.length ; j++ ){
    //if digunakan sebagai checker apakah hasil penggabungan telah menemukan pasangan terbesar ataukah harus mengulang looping
      if ( hasil [j] > angkaBesar ){
        angkaBesar = hasil[j];
      }
    }
    return angkaBesar;
  }
  
  
  // TEST CASES
  //memecah pasangan terbesar dengan cara angka pertama dipasangkan dengan angka kedua,angka kedua dengan angka ketiga, dan seterusnya
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99