var carPrototype = {
  initModel: function (model) {
    this.model = model;
  },

  getModel: function () {
    console.log("The model of the car is", this.model);
  },
};

// Initialising an object using function
function F() {}

// passing all the properties to F using prototype object
F.prototype = carPrototype;

var newCar = new F();

newCar.initModel("Porche");

newCar.getModel();
