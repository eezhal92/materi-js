var buku = [
	{ judul: 'Learn JS', stok: 2 },
	{ judul: 'Algoritma', stok: 1 },
	{ judul: 'Bahasa Inggris', stok: 9 },
	{ judul: 'Web Developing', stok: 5 }
];

function daftar() {
	var daftar = "Daftar Buku: \n";
	
	buku.forEach(function(buku, index) {
		daftar += "Judul:" + buku.judul + ". Stok:" + buku.stok + "\n";		
	});

	console.log(daftar);
}

function pinjam(judul) {
	var bukuDipinjam;
	
	buku.forEach(function(buku, index) {
		if (buku.judul.toLowerCase() == judul.toLowerCase()) {
			bukuDipinjam = buku;
		}
	});

	if (bukuDipinjam == undefined) { // klw buku tidak ditemukan
 		console.log('Buku Tidak Ditemukan!');		
	} else { // klw ditemukan, kurangi stok
		if(bukuDipinjam.stok == 0) {
			console.log('Stok Habis!');			
		} else {
			bukuDipinjam.stok -= 1;
			console.log("Judul:" + bukuDipinjam.judul + ". Stok Sekarang:" + bukuDipinjam.stok);
		}		
	}
	
}

function kembalikan(judul) {
	var bukuDikembalikan;

	buku.forEach(function(buku, index) {
		if (buku.judul.toLowerCase() == judul.toLowerCase()) {			
			bukuDikembalikan = buku;
		}
	});

	if(bukuDikembalikan == undefined) {
		console.log('Buku Tidak Ditemukan! Jadi kita tidak terima!');		
	} else {
		bukuDikembalikan.stok += 1;
		console.log("Judul:" + bukuDikembalikan.judul + ". Stok Sekarang:" + bukuDikembalikan.stok);
	}
}

function tambah(judul, stok) {	
	var stok = parseInt(stok);
	
	if(isNaN(stok)) { // cek apakah hasil parse input berupa NaN atau tidak
		console.log("Mohon Coba Lagi.");		
		return false;
	} else { // klw masuk disini berarti berupa number, contoh 2
		var bukuBaru = { // bikin object baru
			judul: judul,
			stok: stok
		};

		buku.push(bukuBaru);
		console.log("Berhasil Menambah Buku!")
		daftar();
	}
}
