(function (global) {
	var ajaxutils={};
	function getRequestObject(){
		if(window.XMLHttpRequest)
			return (new XMLHttpRequest());
		else if(window.ActiveXObject)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		else{
			global.alert("AJAX NOT SUPPORTED");
			return(null);
		}
	};
	ajaxutils.sendGetRequest=function(requestUrl,responseHandler){
		var request=getRequestObject();
		request.onreadystatechange=
		function(){
			handleResponse(request,responseHandler);
		};
		request.open("GET",requestUrl,true);
		request.send(null);
	};
	function handleResponse(request,responseHandler){
		// body...
		if((request.readyState == 4)&&(request.status==200))
			responseHandler(request);
	}
	global.$ajaxutils=ajaxutils;
})(window);