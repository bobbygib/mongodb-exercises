module.exports = function(db) {
	//What is the title of the movie(s) that was the most checked out?
	db.collection("movies").distinct('movieId', function(err, data) {
	console.log ("Exercise 3:\n\tThe movie(s) X, Y -- checked out Z times");
};
