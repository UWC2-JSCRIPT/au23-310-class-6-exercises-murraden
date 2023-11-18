// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"


$( document ).ready(function() {

    let $newA = $('<a>');
    $newA.text('Buy Now!');
    $('newA').attr('id', 'cta');
    $('main').append($newA);

    console.log($('img').attr('data-color'));

    $('ul li:eq(2)').addClass('highlight');

    $('p').remove();

    $newA.on('click', function() {
        $newA.remove();

        let addToCart = $('<p>').text('Added to cart');
        $('main').append(addToCart);
    });
});
    