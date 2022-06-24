var ulang = true;
while (ulang) {
  alert("Game tebak angka\ntebak angka dari 1 - 10\nkamu punya 5 kesempatan");

  //angka random 1 - 10
  var angkaRandom = Math.floor(Math.random() * 10) + 1;
  console.log(angkaRandom);
  var angkaTebakan = prompt("masukkan angka tebakan");
  var kesempatan;

  for (kesempatan = 4; kesempatan >= 1; kesempatan--) {
    if (angkaTebakan == angkaRandom) {
      alert("kamu benar\njawaban yang dicari " + angkaRandom);
      break;
    } else if (angkaTebakan > angkaRandom) {
      angkaTebakan = prompt("terlalu besar, sisa kesempatan " + kesempatan);
    } else if (angkaTebakan < angkaRandom) {
      angkaTebakan = prompt("terlalu kecil, sisa kesempatan " + kesempatan);
    } else {
      alert("error, anda memasukkan input yang salah, silahkan refresh halaman ini");
    }
  }
  if (kesempatan === 0) {
    alert("kesempatan telah habis anda gagal");
  }

  ulang = confirm("ingin mengulang lagi?");
}
alert("terimakasih salam dari developer binggie");
