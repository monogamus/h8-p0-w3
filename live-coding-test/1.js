/* Soal 1
  ////////////
  Tiket Konser
  ////////////

  Buatlah suatu algoritma untuk pembelian tiket konser.

  [INSTRUCTIONS]
    1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
       akan memilih harga yang paling mahal.
    2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
       maka dia akan pulang ke rumah.
    3. Harga jenis kursi konser, antara lain:
      - VVIP 1000000
      - VIP  700000
      - Reguler 300000
    4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

  [RULES]
    1. Hanya tulis Algoritma saja
*/

// type here
var name = "Peserta";
var money = "2000000";
var tiket;

if (money < 300000) {
    console.log("Uang "+name+" tidak mencukupi. silakan "+name+" pulang.");
} else {
    if (money >= 1000000){
        tiket = "tiket VVIP";
        money -= 1000000;
    } else if (money >= 700000) {
        tiket = "tiket VIP";
        money -= 700000;
    } else {
        tiket = "tiket Reguler";
        money -= 300000
    }
}

if (name !== ""){
    console.log(name+" bisa pesan "+tiket+" dan sisa uang = " + "Rp"+money+".-");
}