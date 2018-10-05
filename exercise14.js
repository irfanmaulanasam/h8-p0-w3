function mengelompokkanAngka(arr) {

  var angkaGenap = [];

  var angkaGanjil = [];
  
  var kelipatanTiga = [];
  
  var hasil = [];
  
  hasil.push( angkaGenap , angkaGanjil , kelipatanTiga ) ;
  
  for ( var i=0 ; i<arr.length ; i++ ){
  
    if (arr [i] % 3 === 0 ) {
      kelipatanTiga.push ( arr[i] );

    }
  
    else if ( arr [i] % 2 === 0 ) {
      angkaGenap.push ( arr[i] );

    }
  
    else {
      
      angkaGanjil.push( arr[i] );
    }
  } return hasil
}


console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// function mengelompokkanAngka(arr) {
//   var result = []
//   var genap = []
//   var ganjil = []
//   var kelipatanTiga = []
//   result.push(genap, ganjil, kelipatanTiga)
//   for(var i = 0; i < arr.length; i++) {
//       if(arr[i] % 3 === 0) {
//           kelipatanTiga.push(arr[i])
//       } else if(arr[i] % 2 === 0) {
//           genap.push(arr[i])
//       } else{
//           ganjil.push(arr[i])
//       }
//   } return result
// }