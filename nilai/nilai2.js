function konversiNilai(nilai) {
	var grade;
	if(nilai >= 85) {
		grade = 'A';
	} else if(nilai >= 70) {
		grade = 'B';		
	} else if(nilai >= 60) {
		grade = 'C';		
	} else if(nilai >= 50) {
		grade = 'D';		
	} else if(nilai >= 0) {
		grade = 'E';		
	}

	return grade;
}

function Mahasiswa(nim, nama, dataNilai) {
	this.nama = nama;
	this.nim = nim;
	this.dataNilai = dataNilai;
	this.grade = function() {
		var total = 0;
		for(nilai in this.dataNilai) {
			total += this.dataNilai[nilai];
		}

		return konversiNilai(total / 5);
	}
}

var pay = new Mahasiswa(
	'001',
	'Pay',
	{
		tugas1: 90,
		tugas2: 30,
		tugas3: 30,
		midTest: 90,
		finalTest: 30,
	}
);

var handri = new Mahasiswa(
	'002',
	'Handri',
	{
		tugas1: 100,
		tugas2: 100,
		tugas3: 100,
		midTest: 100,
		finalTest: 100,
	}
);

var fitrah = new Mahasiswa(
	'003',
	'Fitrah',
	{
		tugas1: 80,
		tugas2: 70,
		tugas3: 87,
		midTest: 60,
		finalTest: 60,
	}
);

var mhs = [ pay, handri, fitrah ];


mhs.forEach(function(m) {
	console.log(m.nama, "Grade:", m.grade());
})

