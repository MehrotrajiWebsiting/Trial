/*document.addEventListener("DOMContentLoaded",
	function (event) {
	var sayHi=function(){
		this.textContent="Said Hi";
		var message=document.querySelector("input").value;
		if(message == "Om"){
			message="<h2> Hi Mr "+message+"</h2>";
			document.querySelector("div")
		.innerHTML=message;
		}
		else{
			message="<h2> Hi "+message+"</h2>";
		document.querySelector("div")
		.innerHTML=message;
	}
	};
	var hi=function(){
		this.textContent="Hi";
	}
	document.querySelector("button")
		.addEventListener("click",sayHi);
		document.querySelector("button")
	.addEventListener("blur",hi);	
	});*/
document.addEventListener("DOMContentLoaded",function(event){
	document.querySelector("button")
	.addEventListener("click",function(){
		$ajaxutils.sendGetRequest("name.txt",function(request){
			var name=request.responseText;
			document.querySelector("#content")
			.innerHTML="<h2>Hi "+name+"!</h2>";	
		})
	})
});