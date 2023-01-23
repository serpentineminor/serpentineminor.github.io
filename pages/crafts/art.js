/* // Inserting Images automatically
var html = '';

var section1 = ['', '', '']//write one-word link names in this list
for (i = 0; i<section1.length; i++){
	html += '<div class="imagetn"><img src="' + section1[i] + '" style="max-width: 100px; max-height: 100px;">' + '</div>'
}


document.getElementById("image-container").innerHTML = html;

// Text from file

fetch('test.txt')
    .then(res => res.text())
    .then(res => textdiv.innerHTML = res); */

// Text from json
async function fetchJson() {
    testjsonfetch = await fetch('art.json')
    
    testjsonobj = await testjsonfetch.json();
    console.log(testjsonobj.images)
    var html = '';
    var section1 = testjsonobj.images//write one-word link names in this list
    for (i = 0; i<section1.length; i++){
	    html += '<img src="' + section1[i] + '" class="img-responsive" onclick="myFunction(this);">'
    }

    document.getElementById("gallery").innerHTML = html;

}

fetchJson();
function myFunction(img) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    } 
}  

/* function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}  */