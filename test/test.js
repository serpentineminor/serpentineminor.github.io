// Inserting Images automatically
var html = '';

var section1 = ['', '', '']//write one-word link names in this list
for (i = 0; i<section1.length; i++){
	html += '<div class="imagetn"><img src="' + section1[i] + '" style="max-width: 100px; max-height: 100px;">' + '</div>'
}


document.getElementById("image-container").innerHTML = html;

// Text from file

fetch('test.txt')
    .then(res => res.text())
    .then(res => textdiv.innerHTML = res);

// Text from json
async function fetchJson() {
    testjsonfetch = await fetch('test.json')
    
    testjsonobj = await testjsonfetch.json();
    console.log(testjsonobj.testing)

    document.getElementById("jsontextdiv").innerHTML = testjsonobj.testing;

}

fetchJson();