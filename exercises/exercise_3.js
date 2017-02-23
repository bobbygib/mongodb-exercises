module.exports = function(db) {
	//What is the title of the movie(s) that was the most checked out?
	db.collection("checkouts").aggregate([ 'movieId', function(err, data) {
  {$checkouts:{
    id: "$movieId", 
    count: {$size:{"$ifNull":["$movieId",[]]} }
  }},
  {$group: {
    _id: null, 
    max: { $max: "$count" }
  }}
])
	console.log(max)
	console.log ("Exercise 3:\n\tThe movie(s) X, Y -- checked out Z times");
	});
};
