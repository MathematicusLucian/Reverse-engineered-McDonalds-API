//To override CORS:
//open -a Google\ Chrome --args --disable-web-security --user-data-dir

$( document ).ready(function() {

	$( ".result" ).html( "Let's get some data!" );

	$.get( "https://www.mcdonalds.com/wws/json/getItemDetails.htm", function( data ) {

	  console.log( "Load was performed." );

	  console.log( data );
	
	})
    .fail(function(xhr, textStatus, errorThrown) {

      console.log( "Load was performed." );	

      $( ".result" ).html(xhr.responseText + "; " + xhr.textStatus); 

    });

});