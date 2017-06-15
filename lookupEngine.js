
var submitClicked = document.getElementById("submitButton")

submitClicked.addEventListener("click", infoReturn);
    

var inputState = document.getElementById("State");
var states = [];
data.forEach(function(dist,i){
	var option = document.createElement("option");
	if(states.indexOf(dist.state)<0){
		states.push(dist.state);
		option.text = dist.state;
		inputState.add(option);
	}
})

var inputDist = document.getElementById("District");
var dists = [];
data.forEach(function(dist,i){
	var option = document.createElement("option");
	if(dists.indexOf(dist.district)<0){
		dists.push(dist.district);
		option.text = dist.district;
		inputDist.add(option);
	}
})


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