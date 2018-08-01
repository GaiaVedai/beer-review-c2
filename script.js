
var cats = [];

var addCat = function () {
    let catName = $('.cats-input').val();
    let category = $('.category-input').val();
    cats.push({name: catName, category: category});
    renderCats();
};

$('.post-cats').on('click', addCat);

function renderCats() {
    $('.cats-list').empty();
    $.each(cats, function (index, value) {
        var listDisplay = value.name + ": "+ value.category;
        $('.cats-list').append('<li>'+listDisplay +'</li>');
        // $('li').text(value); 
    });
 }


