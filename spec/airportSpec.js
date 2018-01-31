describe ('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it ('checks if hangar is empty initially', function(){
    expect(airport.planes()).toEqual([]);
  });

   describe('confirms landing' ,function(){
    it ('if plane is in the hangar after landing', function(){
      airport.confirmLanding(plane)
      expect(airport.planes()).toContain(plane);
    });
  });

  describe('confirms takeoff' ,function(){
    it ('if hangar is empty after takeoff',function(){
      airport.confirmLanding(plane)
      airport.confirmTakeOff(plane)
      expect(airport.planes()).not.toContain(plane);
    })
  })
});
