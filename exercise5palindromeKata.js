function palindrome(kata) {
  var reverse = ''
    for( var i = kata.length-1 ; i >= 0 ; i-- ) {
        reverse += kata[i] ;
        } if( reverse === kata ) {
         return true;
        }else{
            return false;
    }
}
//palindrome ialah suatu nilai yang bisa dibolak-balik variablenya,
//contohnya katak bisa benar karena bila dibaca dari belakangpun kata tersebut akan tepat sama 
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false