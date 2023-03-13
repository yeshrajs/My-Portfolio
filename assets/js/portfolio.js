
const readMoreBtn = document.querySelector(".read-more-btn");
const hiddenContent = document.querySelector(".hidden-content");
readMoreBtn.addEventListener("click", function() {
	hiddenContent.style.display = hiddenContent.style.display === "none" ? "block" : "none";

});
readMoreBtn.addEventListener("click", function() {
	if(hiddenContent.style.display === "block" ){
		readMoreBtn.textContent="SHOW LESS";
	}
	else{
		readMoreBtn.textContent="READ MORE";
	}

});

