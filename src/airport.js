function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.confirmLanding = function(plane) {
  // console.log("Confirm landing " + this._weather.isStormy())
  if (this._weather.isStormy()) {
    // console.log("About to throw exception")
    throw new Error('Cannot land in stormy weather');
  }
   this._hangar.push(plane);
};

Airport.prototype.confirmTakeOff = function(plane) {
  // console.log("confirm takeoff " + this._weather.isStormy())
  if (this._weather.isStormy()) {
    throw new Error('Cannot takeoff in stormy weather');
  }
  // this._hangar = [];
 this._hangar.splice(plane);
//   function remove(array, element) {
//     const index = array.indexOf(element);
//     array.splice(index, 1);
// }
};
