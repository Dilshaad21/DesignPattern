// Using functions as classes

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.CarInfo = function () {
    return (
      this.model + " has run " + this.miles + " many miles on year" + this.year
    );
  };
}

// Defining the object

let carObj = new Car("Subaru", 2008, 233);

console.log(`Car model name ${carObj.model}`);
console.log(carObj.CarInfo());

// Using prototype

function CarNew(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

CarNew.prototype.toString = function () {
  return (
    this.model + " has run " + this.miles + " many miles on year" + this.year
  );
};

let civic = new CarNew("Honda Civic", 2009, 20000);

console.log(civic.toString());
