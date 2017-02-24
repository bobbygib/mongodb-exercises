module.exports = function(db) {
	// Which movie(s) had the most checkouts in April?


	db.collection("checkouts").aggregate([
	{ 
		$match : { month : "apr" } 
	},
	{
		$sortByCount: "$movieId"
	},
	{
		$lookup : {
			from: "checkouts",
			localField: "movieId",
			foreignField: "month",
			as: "movieData"
		}
	}
	], function(err, max) {
			if(err){
				console.log(err);
				return;
		}
		console.log(max)
		var bArray = [];
		for(var i = 0; i < max.length; i ++){
			if(max[i].count === max[0].count){
				bArray.push(max[i])
				//console.log(bArray)
			}

		
		}
	console.log(`Exercise 5:\n\tMovies had the most checkouts in April with ${max[0].count} checkouts`);
	//console.log(max)
	})
};
