$(document).ready(function() {
  $searchBar = $('#search-input');
  $searchBtn = $('#search-btn');
  $searchResult = $('#search-result');

  // que aparezcan las imagenes al hacer click en el input
  $searchBar.on('click', function() {
    $searchResult.removeClass('hide');
  });

  
});
