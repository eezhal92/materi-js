function ajax(method, url, formData, callback) {
	if(formData == undefined) {
		formData = '';
	}

	var xmlhttp = new XMLHttpRequest();
	
	// cek ketika state berubah
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = xmlhttp.responseText;

			console.log("Response: ", response, ". Tipe:", typeof response); // print what we've got
			callback(response);
		}
	};

	xmlhttp.open(method, url, true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send(formData);
}

function generateList(data) {
	var containerList = document.createElement('div');
	var ul = document.createElement('ul');

	containerList.appendChild(ul);
	
	if(Array.isArray(data)) {
		data.forEach(function(item, index) {
			var li = document.createElement('li');
			li.innerHTML = "Nama: " + item.name + ". Umur: " + item.age;
			ul.appendChild(li);
		});
	} else {
		var title = document.createElement('h2');
		var li = document.createElement('li');
		
		title.innerHTML = "IT superman kali ini adalah:";
		li.innerHTML = "Nama: " + data.name + ". Umur: " + data.age;
		containerList.insertBefore(title, ul);
		ul.appendChild(li);
	}

	return containerList;
}

function clearDom() {
	var container = document.querySelector('#app .list-container');
	
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}	
}

var btnDaftar = document.querySelector('#btn-daftar');
var btnRandom = document.querySelector('#btn-random');

btnDaftar.addEventListener('click', function() {
	clearDom();

	ajax('get', 'server.php', '', function(data) {
		var lists = generateList(JSON.parse(data));
		document.querySelector('#app .list-container').appendChild(lists);
	});
});

btnRandom.addEventListener('click', function() {
	clearDom();
	
	ajax('get', 'server.php?random=true', '', function(data) {
		var lists = generateList(JSON.parse(data));
		document.querySelector('#app .list-container').appendChild(lists);
	});
});

