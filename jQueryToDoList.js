$(document).ready(function () {
/**
 * Toggles "done" class on <li> element
 */
  $('body').on('click', 'li', function () {
    $(this).toggleClass('done');
  });

/**
 * Delete element when delete link clicked
 */
  $('body').on('click', 'a.delete', function (e) {
    e.stopPropagation();
    const fadeOutListItem = $(this).closest('li');
    fadeOutListItem.fadeOut(2000, function () {
      fadeOutListItem.remove();
    });  
  });

/**
 * Adds new list item to <ul>
 */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();
    if (text !== '') {
      const newListItem = $('<li><span>' + text + '</span><a class="delete">Delete</a></li>');
      $('.today-list').append(newListItem);
      $('#new-todo').val('');
    }  
  };

// add listener for add

  $('body').on('click', 'a.add-item', addListItem);

});