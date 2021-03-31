class Car {
  constructor(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  carInfo = () => {
    return (
      this.model + " has run " + this.miles + " many miles on year" + this.year
    );
  };
}

let carObj = new Car("Porche", 2015, 2000);

console.log(carObj);

console.log(carObj.carInfo());
