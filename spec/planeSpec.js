describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['confirmLanding','confirmTakeOff']);
  });
  it ('can land at airport', function(){
    plane.land(airport);
    expect(airport.confirmLanding).toHaveBeenCalledWith(plane);
  });
  it ('can takeoff from airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.confirmTakeOff).toHaveBeenCalled();
  });
});
