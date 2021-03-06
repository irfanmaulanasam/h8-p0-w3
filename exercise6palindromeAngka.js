//looping palindrome dengan while
function angkaPalindrome(num) {
  while (true) {
    num++;
      var str = String(num);
      var strReverse = str.split('').reverse().join('');
      //variabel number dipecah dengan split lalu dibalik dan disatukan kembali apakah sudah mengalami palindrome atau belum
      if (str === strReverse) {
        //if digunakan sebagai checker sampai angka berapa palindrome paling dekat dengan angka tersebut
      return Number(str);
      //keluaran true
    }
  } 
}

//looping palindrome menggunakan if
function angkaPalindrome2(num) {
  var count = num
  count ++
  strNum = String(count)

  if(count < 10) {
    return count
  } else {
    var reverse = ''
    for(var i = strNum.length-1; i >= 0 ; i-- ) {
      reverse += strNum[i]
    } 
    if(reverse === strNum)
     {
      return reverse
    }
     else
      {
      return angkaPalindrome2(count)
    }
  }
}
  

// TEST CASES
console.log('============================')
console.log('keluaran palindrome dengan fungsi while')
console.log('============================')
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log('============================')
console.log('keluaran palindrome dengan fungsi if')
console.log('============================')
console.log(angkaPalindrome2(8)); // 9
console.log(angkaPalindrome2(10)); // 11
console.log(angkaPalindrome2(117)); // 121
console.log(angkaPalindrome2(175)); // 181
console.log(angkaPalindrome2(1000)); // 1001
