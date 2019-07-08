//To override CORS:
//open -a Google\ Chrome --args --disable-web-security --user-data-dir

$( document ).ready(function() {

	$( ".result" ).html( "Let's get some data!" );

	$.get( "https://www.mcdonalds.com/wws/json/getItemDetails.htm?country=UK&item=200145", 
	function( data ){

	  console.log( "Load was performed." );

	  $( ".result" ).html(data.item.imported_item_name);
	  console.log( data );
	  //["attach_item_hero_image"]["description"]["image_name"]
	
	})
    .fail(function(xhr, textStatus, errorThrown) {

      console.log( "Load was performed." );	

      $( ".result" ).html(xhr.responseText + "; " + xhr.textStatus); 

    });

});