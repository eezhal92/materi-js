/**
 * events: click, mousemove, mouseover, mouseout, etc
 */

var dom = document.getElementById('headline'); // document.querySelector('#headline') 

function handleClick() {
	this.innerHTML = 'Awesome!';
	this.style.color = 'red';
}

dom.addEventListener('click', handleClick, false);

// tunda 5 detik (argumen 2), setelah itu jalankan callback (argument 1)
setTimeout(function() {
	dom.removeEventListener('click', handleClick, false);
	dom.innerHTML = 'Time out!';
}, 5000);
