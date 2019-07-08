//To override CORS:
//open -a Google\ Chrome --args --disable-web-security --user-data-dir

$( document ).ready(function() {

	$( ".result" ).html( "Let's get some data!" );

	$.get( "https://www.mcdonalds.com/wws/json/getItemDetails.htm?country=UK&item=200145", 
	function( data ){

	  console.log( "Load was performed." );

	  $( ".result" ).html("").append(
	  	"<img src ='https://www.mcdonalds.com/content/dam/uk/nutrition/product/pdp-desk/" +
	  	data.item.attach_item_thumbnail_image.image_name +
	  	"'>" +
	  	"<h4>Item: " +
	  	data.item.imported_item_name +
	  	"</h4>" +
	  	"<p>" +
	  	data.item.description +
	  	"</p>" +
	  	"<p>" +
	  	data.item.footer.footer_name36 +
	  	"</p>" +
	  	"<p><strong>Ingredients:</strong> " +
	  	data.item.item_ingredient_statement +
	  	"</p>"
	  );

	  console.log( data ); 
	
	})
    .fail(function(xhr, textStatus, errorThrown) {

      console.log( "Load was performed." );	

      $( ".result" ).html(xhr.responseText + "; " + xhr.textStatus); 

    });

});