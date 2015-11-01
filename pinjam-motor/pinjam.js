setTimeout(function () {
  // tanya nama
  var nama = prompt("Siapa namamu?");

  if(nama.length > 0) {
    // cek nama
    if(nama.toLowerCase() == 'ungke') { // kalau ungke, tampilkan pesan te boleh
      alert("Te boleh pinjam motor Ungke!");
    } else { // kalau selain ungke, jalankan block ini
      //tanya umur
      var umur = parseInt(prompt("Berapa umurmu?"));

      // cek umur
      if(!isNaN(umur)) { // cek apakah hasil parse inputnya berupa NaN
        if(umur >= 18) { // kalau umurnya diatas atau sama dengan 18, boleh pinjam
          alert("Pake Jo Motor!");
        } else { // dibawahnya, te boleh
          alert("Te boleh pinjam motor! Bajalan saja!");
        }
      } else {
        alert("Kasih maso angka!");
      }

    }

  }
}, 2000);