var vehicle = {
  getModel: function () {
    console.log("The model of this vehicle is.." + this.model);
  },
};

// vehicle.model = "Model1";
// Printing the model name without initialising it.
console.log(vehicle.getModel());

// Inherits all the previous properties of vehicle object
var car = Object.create(vehicle, {
  year: {
    value: 2001,
  },

  model: {
    value: "Ford",
    enumerable: true,
  },
});

console.log(car.getModel());
