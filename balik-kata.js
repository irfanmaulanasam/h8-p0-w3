function balikString(kata) {
  var kataTerbalik = '';

  for(var i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
  }
  return kataTerbalik;
}
console.log(hello world!)

//input "hello world!"
//output
"!dlrow olleh"
