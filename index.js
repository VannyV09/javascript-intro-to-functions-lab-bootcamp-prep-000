function shout(string) {
  return string.toUpperCase ();
}
function whisper(string) {
  return string.toLowerCase ();
}
function logShout(string) {
   expect(shout('hello')).toEqual('HELLO');
}