"use strict";

describe ('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport(weather);
  });

  it ('checks if hangar is empty initially', function(){
    expect(airport.planes()).toEqual([]);
  });

   describe('when its not stormy' ,function(){
     beforeEach(function(){
       weather.isStormy.and.returnValue(false);
     });
    it ('has plane in the hangar after landing', function(){
      airport.confirmLanding(plane);
      expect(airport.planes()).toContain(plane);
    });
    it ('does not have plan in hangar after takeoff',function(){
      airport.confirmLanding(plane)
      airport.confirmTakeOff(plane)
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('when its stormy' ,function(){
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });
    it ('does not allow to land', function() {
      expect(function(){ airport.confirmLanding(plane); }).toThrowError('Cannot land in stormy weather');
    });
    it('does not allow to takeoff', function() {
      expect(function(){ airport.confirmTakeOff(plane); }).toThrowError('Cannot takeoff in stormy weather');
    });
  });
});
