function Plane() {
  this._location = null ;
}

Plane.prototype.location = function(){
  return this._location;
};
Plane.prototype.land = function(airport){
  airport.confirmLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function(airport){
  airport.confirmTakeOff(this);
  this._location = null;
};
