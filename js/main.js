var favSeasons = [
	{
		season: "Winter",
		months: "December - February",
		activities: "Skiing, Snowboarding, Having a snowball fights, Making snow angels"
	},
	{
		season: "Spring",
		months: "March - May",
		activities: "Going camping, Going to the beach, Flying a kite, Going kayaking"
	},
	{
		season: "Summer",
		months: "June - August",
		activities: "Going to the beach, Eating ice cream, Having barbecues, Going Hiking"
	},
	{
		season: "Autumn",
		months: "September - November",
		activities: "Going to the mountains, Jumping in a pile of leaves, Carving pumpkins, Building bonfires"
	}
];


var input = document.getElementById("season");
var btn = document.getElementById("btn");
var facts = document.getElementById("facts");

function findSeason() {
	for(var i = 0; i < favSeasons.length; i++) {
		console.log(xfavSeasons[i].season)
		if(input.value == favSeasons[i].season) {
			console.log("found a match")
		}

	}

}


