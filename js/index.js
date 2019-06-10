// external js: isotope.pkgd.js
$(window).load(function(){
var selectedCategory;

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  getSortData: {
    selectedCategory: function( itemElem ) {
      return $( itemElem ).hasClass( selectedCategory ) ? 0 : 1;
    }
  }
});

var $items = $('.grid').find('.grid-item');

$('.image-selector').on( 'click', function() {
  // set selectedCategory
  selectedCategory = $( this ).attr('data-category');
  if ( selectedCategory == 'all' ) {
    $grid.isotope({
      sortBy: 'original-order'
    });
    // restore all items to full opacity
    $items.css({
      opacity: 1
    });
    return;
  }
  // change opacity for selected/unselected items
  var selectedClass = '.' + selectedCategory;
  $items.filter( selectedClass ).css({
    opacity: 1
  });
  $items.not( selectedClass ).css({
    opacity: 0.25
  });

  // update sort data now that selectedCategory has changed
  $grid.isotope('updateSortData');
  $grid.isotope({ sortBy: 'selectedCategory' });
});

  // change is-checked class on buttons
$('.image-selector').click(function(){
  $(this).toggleClass('checked')
})
})
