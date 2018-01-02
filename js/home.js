$(document).ready(function() {
  $searchBar = $('#search-input');
  $searchBtn = $('#search-btn');
  $searchResult = $('#search-result');

  // ocultamos a galeria de imagenes
  $searchResult.hide();

  // que aparezcan las imagenes al hacer click en el input
  $searchBar.on('click', function() {
    $searchResult.toggle('swing');
  });

  
});
