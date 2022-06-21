var tanya = true;
while (tanya) {
  var p = prompt("Selamat datang di game suwit jawa \nPilih : gajah, semut, orang");

  // bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah" || "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang" || "Orang";
  } else {
    comp = "semut" || "Semut";
  }

  // rules
  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah" || p == "Gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang" || p == "Orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut" || p == "Semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "MEMASUKKAN PILIHAN YANG SALAH!!!";
  }

  // tamplikan hasilnya
  alert("kamu memilih : " + p + "\nkomputer memilih : " + comp + "\nmaka hasilnya : kamu  " + hasil);

  tanya = confirm("ingin mengulang lagi?");
}
alert("terimakasih sudah bermain salam dari developer binggie");
