var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {

  input.splice(1, 4, "Roman Alamsyah Elsharawy");
  input.push('Provinsi Bandar Lampung', '21/05/1989', 'pria', 'SMA Internasional Metro')
  //fungsi splice dan push
  console.log(input);
  console.log('======================================');

  var input2 = input.slice(3, 4)
  var input2 = input[3].split('/');
  var namaBulan = '';

  switch (input2[1]) {
    case '01': namaBulan = 'January'; break;
    case '02': namaBulan = 'February'; break;
    case '03': namaBulan = 'Maret'; break;
    case '04': namaBulan = 'April'; break;
    case '05': namaBulan = 'Mei'; break;
    case '06': namaBulan = 'Juni'; break;
    case '07': namaBulan = 'Juli'; break;
    case '08': namaBulan = 'Agustus'; break;
    case '09': namaBulan = 'September'; break;
    case '10': namaBulan = 'Oktober'; break;
    case '11': namaBulan = 'November'; break;
    case '12': namaBulan = 'Desember'; break;
    default:
  }
  //fungsi split dan switch bulan
  console.log(namaBulan);
  console.log('======================================');
  //sorting descending tanggal dan join
  //input2.sort(descending)
  var gabung = input2.join('-')

  input2.sort(function (a, b) { return b - a })

  console.log(input2);
  console.log('======================================');
  console.log(gabung);//join 
  console.log('======================================');

  var potong = input[1].slice(0, 15)
  console.log(potong)
}
dataHandling2(input)
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */