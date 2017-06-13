
var submitClicked = document.getElementById("submitButton")

submitClicked.addEventListener("click", infoReturn);


function infoReturn(){
	var state = document.getElementById("State").value;
	var district = document.getElementById("District").value;
	var line = data.filter(function(data){ return data.state == state && data.district == district});
	
	var toPrint = line[0];
	
	
	document.getElementById("state").innerHTML  = toPrint.state;
	document.getElementById("district").innerHTML  = toPrint.district;
	document.getElementById("repName").innerHTML  = toPrint.repName;
	document.getElementById("participants").innerHTML  = toPrint.disabledSsiMonthlyParticipants;
	
}