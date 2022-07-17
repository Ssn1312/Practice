$(document).ready(function() {
    $('body').on('click', '.number-minus, .number-plus', function(){
        let $row = $(this).closest('.number');
        let $input = $row.find('.number-text');
        let step = $row.data('step');
        let val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        document.getElementById("val").innerHTML = val;
        return false;
    });

    $('body').on('change', '.number-text', function(){
        let $input = $(this);
        let $row = $input.closest('.number');
        let step = $row.data('step');
        let min = parseInt($row.data('min'));
        let max = parseInt($row.data('max'));
        let val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;
        } else if (max && val > max) {
            val = max;
        }
        $input.val(val);
    });
});

$(function(){
    $('#quantity').click(function(){
        $('#basket').fadeIn().css('top',$(document).height()/3);
        const val = document.querySelector('.text').value;
        document.querySelector('#val').innerHTML = val;
        function enumerate (num, dec) {
            if (num > 100) num = num % 100;
            if (num <= 20 && num >= 10) return dec[2];
            if (num > 20) num = num % 10;
            return num == 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
        }
        document.querySelector('.lastChars').innerHTML = enumerate(val, ['','а','ов']);
    });
    $('#ok').click(function(){
        $('#basket').fadeOut();
    });

});


const expandImg = document.querySelector('#expandedImg');
let imgg = document.querySelectorAll('.product__gallery');
console.log(imgg);

$('.product__gallery').on('mouseenter', 'img', function (){
    const imageUrl = $(this).attr('src');
    expandImg.src = imageUrl;
})









