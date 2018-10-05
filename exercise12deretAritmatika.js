function tentukanDeretGeometri( arr ) {
 //deret perkalian atau deret geometri merupakan deret perkalian yang caranya sendiri berbeda dengan deret aritmatika
 //pada deret geometri value indeks yang terdapat pada array dikalikan oleh bilangannya sendiri dan bilangan sebelumnya sehingga menghasilkan angka selanjutnya pada deret tersebut
 //sama halnya dengan aturan deret aritmatika, deret geometri juga mempunyai aturan yang sama hanya perbedaannya geometri prosesnya perkalian sedangkan aritmatika dengan penambahan
  var tampung = 0;

  for (var hasil = 0; hasil < arr.length-1 ; hasil++ ){

  tampung += ( arr [ hasil+1 ] / arr [ hasil ] );
  }
  
  if(( tampung / (arr.length-1 ))===( arr[1] / arr[0] )){
    
    return true;
  
  } else{
    
    return false;
  
  }
  
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
