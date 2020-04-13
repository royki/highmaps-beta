/*
var jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
jsonRequest.onload = function() {
    // console.log(jsonRequest.responseText);
    var jsonData = JSON.parse(jsonRequest.responseText);
    console.log(jsonData[0]);
};
jsonRequest.send();
*/

var pageCounter = 1
var btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    var jsonRequest = new XMLHttpRequest();
    jsonRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    jsonRequest.onload = function() {
        if (jsonRequest.status >= 200 && jsonRequest.status < 400) {
            // console.log(jsonRequest.responseText);
            var jsonData = JSON.parse(jsonRequest.responseText);
            // console.log(jsonData);
            renderHTML(jsonData);
        } else {
            console.log('Error in server');
        }
    };

    jsonRequest.onerror = function() {
        console.log('No data');
    };

    jsonRequest.send();
    pageCounter++;
    /*if(pageCounter > 3){
    	btn.classList.add('hide-me');
    }*/
});


var info = document.querySelector('#info');

function renderHTML(data) {
    var htmlString = '';
    for (var i = data.length - 1; i >= 0; i--) {
        htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ' that likes to eat ';

        for (var j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += ' and ' + data[i].foods.likes[j];
            }
        };
        htmlString += ' and dislikes ';
        for (var j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += ' and ' + data[i].foods.dislikes[j];
            }
        };
        htmlString += '</p>';
    };

    info.insertAdjacentHTML('beforeend', htmlString);
}