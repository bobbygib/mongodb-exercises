module.exports = function(db) {
	//What is the title of the movie(s) that was the most checked out?
	db.collection("checkouts").distinct('movieId', function(err, data) {
		db.things.aggregate([ 
    {$checkouts:{ id: "$movieId", count: {$size:{"$ifNull":["$movidId",[]]} } }}, 
    {$sort : {count : -1}}, 
    {$limit : 1 }
])
	db.things.aggregate([

  {$checkouts:{
    id: "$movieId", count: {$size:{"$ifNull":["$movieId",[]]} }
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
