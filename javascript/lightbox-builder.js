//this file requires the following:

//<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js"></script>
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" type="text/css" media="screen" />

//for examples and documentation see:
//ekko-lightbox see; http://ashleydw.github.io/lightbox/#mixed-gallery

//PURPOSE: to take arguments and generate a lightbox gallery using JQuery and Bootstrap




//EVENT triggers
//on page load...

//on click...
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});