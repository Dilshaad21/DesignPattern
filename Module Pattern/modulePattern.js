// 1. Executing te function and returning the object defined below
var testModule = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
  };
})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

// 2. Defining the public and private variables explicitly

var myNamespace = (function () {
  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function (foo) {
    console.log("In the private method, arguments passed: ", foo);
  };

  return {
    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function (bar) {
      // Increment our private counter
      myPrivateVar++;
      console.log("The public variable here is", this.myPublicVar);
      console.log("Updated private variable", myPrivateVar);
      // Call our private method using bar
      myPrivateMethod(bar);
    },
  };
})();

// Printing the public variable
console.log(myNamespace.myPublicVar);
console.log();
myNamespace.myPublicFunction();
// Passing the public variable to the function
myNamespace.myPublicFunction(myNamespace.myPublicVar);
console.log();

// 3. Example: Testing public and private variables and methods
var basketModule = (function () {
  // privates

  var basket = [];
  var basketName = "";

  function setBasketNamePrivate(name) {
    basketName = name;
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function (values) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function to set basket name
    setBasketName: function (name) {
      console.log("setting basket name to", name);
      setBasketNamePrivate(name);
    },

    // Public function to print the basket objects
    printBasket: function () {
      console.log("This is basket: ", basketName);
      let length = basket.length,
        it = 0;
      while (it < length) {
        console.log(basket[it]);
        it++;
      }
    },
    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount(),
        p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    },
  };
})();

basketModule.setBasketName("My Basket");

basketModule.addItem({
  item: "bread",
  price: 0.5,
});

basketModule.addItem({
  item: "butter",
  price: 0.3,
});

basketModule.printBasket();
console.log("Total price: ", basketModule.getTotal());
