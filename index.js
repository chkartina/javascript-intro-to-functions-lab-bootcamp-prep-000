function shout(string) {
  return string.toUpperCase ()
}
function whisper(string) {
  return string.toLowerCase ()
}
function logShout() {
  console.log("HELLO")
}
function logWhisper() {
  console.log("hello")
}
var lowercase = "hello!"
var uppercase = "HELLO!"
function sayHiToGrandma() {
  if (lowercase.toLowerCase() === lowercase ) {
    console.log ("I can\'t hear you!")
  } else if (uppercase.toUpperCase () === uppercase) {
    console.log ("YES INDEED!")
  }
}
