var mahasiswa = [
	{
		nim: '001',
		nama: 'Foo Bar',
		tugas1: 90,
		tugas2: 70,
		tugas3: 50,
		midTest: 90,
		finalTest: 89
	},
	{
		nim: '002',
		nama: 'Lorem Ipsum',
		tugas1: 30,
		tugas2: 30,
		tugas3: 30,
		midTest: 30,
		finalTest: 39
	},
	{
		nim: '003',
		nama: 'JOhn Doe',
		tugas1: 99,
		tugas2: 100,
		tugas3: 60,
		midTest: 90,
		finalTest: 90
	}
];

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

function jumlahTotal(mahasiswa) {
	return (mahasiswa.tugas1 + mahasiswa.tugas2 + mahasiswa.tugas3 + mahasiswa.midTest + mahasiswa.finalTest) / 5;  
}


mahasiswa.forEach(function(mhs) {
	var total = jumlahTotal(mhs);
	var grade = konversiNilai(total);
	mhs.grade = grade;
});

console.log(mahasiswa);
