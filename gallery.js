
//Displaying a preview of the image that is hovered over.
function upDate(previewPic){

  // Getting the div and display a thumnbnail
   const changeImage = document.getElementById('image');
   changeImage.style.backgroundImage = `url(${previewPic.src})`; 
   
   // Change the text displayed by the div element
   const div = document.getElementById('image');
   div.innerHTML = previewPic.alt; 

}


// Undoing the preview display in the div
function unDo(){

   // Getting the div and displaying the original background. 
   const newImage = document.getElementById('image');
   newImage.style.backgroundImage = "url('')"; 

   // Getting the div and changing back the text to the original. 
   const div = document.getElementById('image');
   div.innerHTML = "Hover over an image below to display here."; 

}
