/*Name this external file gallery.js*/


        function upDate(previewImage) {
            var imageDiv = document.getElementById("image");
            if (imageDiv) {
                var backgroundImageUrl = previewImage.src;
                var altText = previewImage.alt;

                imageDiv.style.backgroundImage = "url(" + backgroundImageUrl + ")";
                imageDiv.innerHTML = altText;
            }
        }

      


  // Restore the original background image URL and text
 function unDo() {
        var imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = "";
        imageDiv.innerHTML = "Hover over an image below to display here.";
    }
	
