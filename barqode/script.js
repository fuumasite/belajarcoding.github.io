function generateQr() {
  let canvas = document.getElementById("canvas");
  let qrinput = document.getElementById("qrinput");

  QRCode.toCanvas(canvas, qrinput.value, (error) => {
    if (error) console.error(error);
    console.log("scan berhasil!");
  });
}
