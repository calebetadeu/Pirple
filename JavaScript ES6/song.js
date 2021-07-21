/*
 * Homework #1: Data Types
 * Keeping Up With the Javascripts - Part 1: ES6
 * Pirple
 * 
 * Descanso - Oficina g3
 * 
 * JavaScript file to describe information about the song
 * and about the band
 * 
 * Calebe Tadeu
 */

var artist = "Oficina G3"; // Artist Name
var song = "Descanso"; // Song Name
var genre = "Rock and Roll"; // Genre of the Song
var durationInSeconds = 185; // Duration in seconds of the Song
var yearReleased = 2016; // Year when eleased
var bandMembers = ["Mauro Henrique", "Juninho Afram", "Duca Tambasco", "Jean Carlos"]; // Members of the band
var songIsAmazing = true; // The song is truly amazing
var releasedAlbums = {
  1999: "Meus Propios Meios",
  2002: "A ele",
  2003: "Obediência",
  2004: "Beatles for Sale",
  2005: "Help!",
  2006: "Rubber Soul",
  2007: "Revolver",
  2008: "Sgt. Pepper's Lonely Hearts Club Band",
  2009: "Magical Mystery Tour",
  2010: "The White Album",
  2011: "Yellow Submarine",
  2012: "Abbey Road",
  2013: "Let It Be",
}
// JS Object with the studio albums of the band

// This is where the information of the song & band is presented to the console
console.log(artist);
console.log(song);
console.log(genre);
console.log(durationInSeconds);
console.log(yearReleased);
console.log(bandMembers);
console.log(bandMembers[3]);
console.log(songIsAmazing);
console.log(releasedAlbums);
console.log(releasedAlbums[1969]);