module.exports = function(db) {
	// Which users checked out any of the Lord of the Rings trilogy?
	db.collection("checkouts").find({
				movieId : {
        $in : ["8", "11", "15"]                  
        }
		}).toArray(function(err, data) {
			var usersLOTR = [];

		for (var i = 0; i < data.length; i++){
			if(usersLOTR.indexOf(data[i].userId) == -1)
				usersLOTR.push(data[i].userId)
			}
			console.log("Exercise 2:\n\tThe LOTR movies were checked out by users " + usersLOTR.join(","))
		
	})
};
