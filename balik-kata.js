function balikKata(kata) {
  
  var kataTerbalik = '';

  for(var i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
  }
  return kataTerbalik;
}

// TEST CASES
console.log(balikKata('Hello World!'));