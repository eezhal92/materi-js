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

	alert(daftar);
}

function pinjam() {
	var judul = prompt("Masukkan Judul Buku Yang Ingin Dipinjam:");

	cari(judul, function(buku) {
		if (buku == undefined) { // klw buku tidak ditemukan
	 		alert('Buku Tidak Ditemukan!');		
		} else { // klw ditemukan, kurangi stok
			if(buku.stok == 0) {
				alert('Stok Habis!');			
			} else {
				buku.stok -= 1;
				alert("Judul:" + buku.judul + ". Stok Sekarang:" + buku.stok);
			}	
		}
	});
}

function kembalikan() {
	var judul = prompt("Masukkan Judul Buku Yang Ingin Dikembalikan:");


	cari(judul, function(buku) {
		if(buku == undefined) {
			alert('Buku Tidak Ditemukan! Pengembalian Ditolak!');		
		} else {
			buku.stok += 1;
			alert("Judul:" + buku.judul + ". Stok Sekarang:" + buku.stok);
		}
	});
}

function tambah() {	
	var judul = prompt("Masukkan Judul Buku Baru:");
	var stok = parseInt(prompt("Masukkan Jumlah Stok:"));
	
	if(isNaN(stok)) { // cek apakah hasil parse input berupa NaN atau tidak
		alert("Mohon Coba Lagi.");
		return false;
	} else { // klw masuk disini berarti berupa number, contoh 2
		var bukuBaru = { // bikin object baru
			judul: judul,
			stok: stok
		};

		buku.push(bukuBaru);
		alert("Berhasil Menambah Buku!")
		daftar();
	}
}

function cari(judul, callback) {
	var bukuDiCari;

	buku.forEach(function(buku, index) {
		if (buku.judul.toLowerCase() == judul.toLowerCase()) {			
			bukuDiCari = buku;
		}
	});

	callback(bukuDiCari);
}

function init() {
	do {
		var commandString = "Masukkan perintah: \n";
		
		var commandList = [
			'1. Daftar',
			'2. Pinjam',
			'3. Kembalikan',
			'4. Tambah',
			'0. Exit'
		];

		commandList.forEach(function(cmd) {
			commandString += cmd + "\n";
		});

		var command = parseInt( prompt(commandString) );

		switch(command) {
			case 1:
 				daftar();

				break;
			case 2:
				pinjam();

				break;
			case 3:
				kembalikan();

				break;
			case 4:
				tambah();

				break;
			case 0:
				return false;
				break;
			default:
				alert("Mohon Masukkan Perintah Yang Benar!")
				break;
		}
	} while(command != 0);
}

init();