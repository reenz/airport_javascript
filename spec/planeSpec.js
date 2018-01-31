describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });
  it ('can land at airport', function(){
    plane.land(airport);
    expect(plane.location()).toEqual(airport);
  });
  it ('can takeoff from airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(plane.location()).toBeNull();
  });
});
