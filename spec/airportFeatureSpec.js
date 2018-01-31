describe('Feature test', function(){
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });
  describe ('when weather is not stormy',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    it ('can land at airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
    it ('can takeoff from airport', function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });
  it ('checks if hangar is empty initially', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('when weather is stormy', function(){
      it ('cannot land ',function(){
        spyOn(Math,'random').and.returnValues(1, 0)
        expect(function(){plane.land(airport);}).toThrowError('Cannot land in stormy weather');
    });
    it ('cannot takeoff' , function(){
      spyOn(Math,'random').and.returnValues(0,1)
      plane.land(airport)
      expect(function(){plane.takeoff(airport);}).toThrowError('Cannot takeoff in stormy weather');
    })
  });
});
