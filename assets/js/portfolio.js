// smooth scroll
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});
// read more
const readMoreBtn = document.getElementById("read-more-btn");
const hiddenContent = document.querySelector(".hidden-content");
 function readmore() {

    // hiddenContent.style.display = hiddenContent.style.display === "none" ?
    // "block" : "none";
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        readMoreBtn.innerHTML = "SHOW LESS";
    }
	 else {
        hiddenContent.style.display = "none";
     readMoreBtn.innerHTML = "READ MORE";
    }
}
// readMoreBtn.addEventListener("click", function() {
// if(hiddenContent.style.display === "block" ){ 		readMoreBtn.textContent="SHOW
// LESS"; 	} 	else{  		readMoreBtn.textContent="READ MORE";  }  }); updated new
// Read more Button
