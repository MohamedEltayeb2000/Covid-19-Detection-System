$(document).ready(function () {

    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    $('#title').keyup(function () {
        var value = $(this).val();
        $('#slug').val(slugify(value));

    });


    setTimeout(function () {
        $('.alert').hide('slow');

    }, 2000);


    $('#myDatepicker2').datetimepicker({
        format: 'YYYY-MM-DD'
    });

    $('#date').datetimepicker({
        format: 'YYYY-MM-DD'
    });
    $('#passed_year').datetimepicker({
        format: 'YYYY'
    });


});