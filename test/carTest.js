const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return true when the car is pink",
    function() {



    }
  );
  
  it('should return false when there are no details about the car',
    function() {

    }
  );
  
  it("should return false when the car is a hatchback",
    function() { // 4
      const car = {
        type: "hatchback"
      };
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    }
  );
  
  it("should return false when the car is a hatchback and pink",
    function() {

    }
  );

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000",
    function() {
    
    }
  );
  
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000",
    function() {

    }
  );
  
  it("should return false when the car has 6 litres/100km and is over $5,000",
    function() {
    
    }
  );
  
  it("should return false when the car has 11 litres/100km and is over $5,000",
    function() {

    }
  );
  
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000",
    function() {
    
    }
  );
  
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000",
    function() {
    
    }
  );
  
  it("should return undefined when there is no car",
    function() {
    
    }
  );






});