function cariMean(arr) {
    var total = 0;
//arti mean adalah nilai rata-rata pada sebuah kumpulan nilai(array)
//untuk menentukan nilai rata-rata harus diketahui dulu jumlah array dengan menggunakan looping for pada sebuah array
    for ( var i = 0; i < arr.length ; i++) {
        total += arr[i];
    }
    //return math.round untuk membulatkan angka hasil bagi dari jumlah angka dengan banyaknya indek dalam array
    return Math.round (total/arr.length);
}
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7