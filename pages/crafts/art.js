// Text from json
async function fetchJson() {
    testjsonfetch = await fetch('art.json')
    
    testjsonobj = await testjsonfetch.json();
    console.log(testjsonobj.images)
    var html = '';
    var section1 = testjsonobj.images//write one-word link names in this list
    for (i = 0; i<section1.length; i++){
	    html += '<img src="' + section1[i][0] + '" class="img-responsive" onclick="showModal(this);" alt="' + section1[i][1] + '">'
    }

    document.getElementById("gallery").innerHTML = html;

}

fetchJson();
function showModal(img) {
    // Get the modal
    var modal = document.getElementById("modalsection");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("modimg");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    } 
}