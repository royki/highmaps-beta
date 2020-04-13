var button = document.querySelector('#button1'); // document.getElementById('button1');
var headLine =  document.querySelector('#head-line');  // document.getElementById('head-line');
var list = document.querySelector('#list'); // document.getElementById('list')
// var listItems = document.getElementById('list').getElementsByTagName('li');


/*for (var i = listItems.length - 1; i >= 0; i--) {
	// addEventListener method takes 2 arguments; 1st argument => name of the event; 2nd argument => name of the function in response to the event
	listItems[i].addEventListener('click', activateItem);
};

function activateItem () {
	headLine.innerHTML = this.innerHTML;
};*/


list.addEventListener('click', activateItem);
function activateItem(e) {
	if (e.target.nodeName == 'LI') {
		headLine.innerHTML = e.target.innerHTML;		
	};
}


var newItemCounter = 1;
button.addEventListener('click', createNewItem);
function createNewItem() {
	list.innerHTML += '<li> New List ' + newItemCounter +'</li>';
	newItemCounter++;
}


