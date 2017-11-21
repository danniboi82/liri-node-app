var keys = require("./keys.js");
var omdb = require("omdb");
var request = require('request');
var twitter = require('twitter');
var nodeSpotifyApi = require('node-spotify-api');


//OMDB GENERIC EXAMPLE
if(process.argv[2] === "movie-this"){
  var title = process.argv[3];
  
  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  console.log("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece");
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's Title : " + JSON.parse(body).Title);
      console.log("The movie's Year: " + JSON.parse(body).Year);
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      console.log("The movie's rating is: " + JSON.parse(body).Ratings[1]);
      console.log("The movie's country of origin: " + JSON.parse(body).Country);
      console.log("The movie is in: " + JSON.parse(body).Language);
      console.log("The movie's rating is: " + JSON.parse(body).Actors);
      console.log("The movie's rating is: " + JSON.parse(body).Plot);
    }
  });
}

// //Twitter GENERIC EXAMPLE ("STREAM")
// if(process.argv[2] === "my tweets"){
// client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });
// })
// };


// //SPOTIFY GENERIC EXAMPLE "SEARCH"
// if(process.argv[2] === "spotify-this-song"){   
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });
// }