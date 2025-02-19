$(function () {
    $(document).on('keypress', function (e) {
        e.preventDefault();
        let letra=String.fromCharCode(e.which);
        if(letra==="h"){
        $('h3').toggle();
        }
    });
});