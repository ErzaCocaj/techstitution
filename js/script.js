$(document).ready(function(){
	var datatimeNow= new Date();
	 console.log("DOM is ready",datatimeNow);
	console.log("Dom is ready!");
$( '#border-wait-form').submit(function(event){
	 
	event.preventDefault();
	var dateTimeNow=$('#datetime-now').val();
	var pikaKufitare= $('#pika-kufitare').val();
	//hyrje-dalje ne minuta
	var hyrjeMinMinuta=$('#hyrje-min-minuta').val();
	var hyrjeMaxMinuta=$('#hyrje-max-minuta').val();
	var daljeMinMinuta=$('#dalje-min-minuta').val();
	var daljeMaxMinuta=$('#dalje-max-minuta').val();
	//hyrje-dalje ne metra
	var hyrjeMinMetra=$('#hyrje-min-metra').val();
	var hyrjeMaxMetra=$('#hyrje-max-metra').val();
	var daljeMinMetra=$('#dalje-min-metra').val();
	var daljeMaxMetra=$('#dalje-max-metra').val();
	
	var dataJson={};
	dataJson ["pikakufitare"]=pikaKufitare;
	dataJson ["hyrjeMinMinuta"]= parseInt(hyrjeMinMinuta);
	dataJson ["hyrjeMaxMinuta"]=parseInt(hyrjeMaxMinuta);
	dataJson["daljeMinMinuta"]=parseInt(daljeMinMinuta);
	dataJson["daljeMaxMinuta"]=parseInt(daljeMaxMinuta);
	dataJson["hyrjeMinMetra"]= parseInt(hyrjeMinMetra);
	dataJson["hyrjeMaxMetra"]=parseInt(hyrjeMaxMetra);
	dataJson["daljeMinMetra"]=parseInt(daljeMinMetra);
	dataJson["daljeMaxMetra"]=parseInt(daljeMaxMetra);
	dataJson["datatimeNow"]=new Date();
	 console.log(dataJson);
	
/*	console.log("Pika kufitare: ",pikaKufitare,"Hyrje min: ",hyrjeMinMinuta, "Hyrje max :" ,hyrjeMaxMinuta,"Dalje min:",daljeMinMinuta,
	"Dalje max", daljeMaxMinuta);
	console.log("Hyrje min: ",hyrjeMinMetra, "Hyrje max :", hyrjeMaxMetra,"Dalje min:",daljeMinMetra,
	"Dalje max", daljeMaxMetra);
	*/
});	
});
