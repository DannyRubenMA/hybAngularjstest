bcApp.controller('mainController', function($scope, $http , $location){
	var controller = this;
	controller.use = "yes"
//	controller.info = {};
	
    controller.url = "http://localhost:8080/DannyWs-web/rest/item";
   
    $http.get(controller.url).success(function(respuesta){
        console.log("resController:" + respuesta);
        controller.info = respuesta;
    });
    
    controller.infoContent = function(){
    	var url = "http://localhost:8080/DannyWs-web/rest/item";
    	   
        $http.get(url).success(function(respuesta){
            console.log("resController:" + respuesta);
            controller.info = respuesta;
        });
    }
    
});