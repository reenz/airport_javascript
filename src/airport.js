function Airport(){
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.confirmLanding = function(plane) {
   this._hangar.push(plane);
};

Airport.prototype.confirmTakeOff = function(plane) {
  this._hangar.splice(plane);
//   function remove(array, element) {
//     const index = array.indexOf(element);
//     array.splice(index, 1);
// }
};
