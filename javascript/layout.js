
//function to determine current year for copywrite etc
var currentYear = function () {
    var d = new Date();
    var y = d.getFullYear();

    $(".cYear").text(y);
}


//EVENT triggers
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});