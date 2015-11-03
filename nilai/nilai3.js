/**
 * @param string nim
 * @param string nama
 * @param object dataNilai
 *
 */
function Mahasiswa(nim, nama, dataNilai) {
	var nim = nim;
	var nama = nama;
	var dataNilai = dataNilai;

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

	function rataNilai() {
		var total = 0;
		var item = 0;
		
		for(nilai in dataNilai) {
			total += dataNilai[nilai];
			item +=1;
		}

		return total / item;
	}

	function grade() {
		var rata = rataNilai();		
		return konversiNilai(rata);
	}


	return {
		nim: nim,
		nama: nama,
		dataNilai: dataNilai,
		grade: grade
	};
}

var pay = new Mahasiswa(
	'001', 
	'Pay', {
		tugas1: 90,
		tugas2: 80,
		tugas3: 70,
		midTest: 60,
		finalTest: 50,
	}
);

var boy = new Mahasiswa('002', 'Boy', {
	tugas1: 100,
	tugas2: 70,
	tugas3: 60,
	midTest: 66,
	finalTest: 50,
});


