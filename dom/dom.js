/**
 * events: click, mousemove, mouseover, mouseout, etc
 */

var dom = document.getElementById('headline'); // document.querySelector('#headline') 

dom.addEventListener('click', handleClick, false);

var tulisan = document.createElement('p');

tulisan.innerHTML = 'Ini dibuat pakai JS.';

document.querySelector('body').appendChild(tulisan);

function handleClick() {
	this.innerHTML = 'Awesome!';
	this.style.color = 'red';
}


// tunda 5 detik (argumen 2), setelah itu jalankan callback (argument 1)
setTimeout(function() {
	dom.removeEventListener('click', handleClick, false);
	dom.style.color = '';
	dom.innerHTML = 'Time out!';
}, 5000);
