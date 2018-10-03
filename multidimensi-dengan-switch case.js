var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
            
function dataHandling(params) {
  var biodata = '';
  for (var i = 0; i < params.length; i++) {
    for (var j = 0; j < params[i].length; j++) {
      switch(j) {
        case 0: biodata = biodata + 'Nomor ID: ' + params[i][j]
        break;
        case 1: biodata = biodata + '\nNama Lengkap: ' + params[i][j];
        break;
        case 2: biodata = biodata + '\nTTL: ' + params[i].slice(2, 3) + ', ' + params[i].slice(3, 4);
        break;
        case 3: biodata = biodata + '\nHobi: ' + params[i].slice(4, 5) + '\n\n';
        break;
      }
    }
  }
  
  return biodata;
}

console.log(dataHandling(input));