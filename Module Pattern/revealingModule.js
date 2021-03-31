var myRevealingBasket = (function () {
  var basket = [],
    basketName = "";

  function publicAddItem(obj) {
    privateAddItem(obj);
  }

  function privateAddItem(obj) {
    basket.push(obj);
  }

  function privateSetBasketName(name) {
    basketName = name;
  }

  function publicSetBasketName(name) {
    privateSetBasketName(name);
  }

  function publicPrintBasketName() {
    return basketName;
  }

  function publicPrintItems() {
    basket.forEach((obj) => {
      console.log(obj);
    });
  }
  // Passing pointers to the public functions which in turn call
  // private functions
  return {
    addItem: publicAddItem,
    setBasketName: publicSetBasketName,
    printBasketName: publicPrintBasketName,
    printAllItems: publicPrintItems,
  };
})();

myRevealingBasket.addItem({
  item: "bread",
  price: 0.5,
});

myRevealingBasket.addItem({
  item: "butter",
  price: 0.3,
});

myRevealingBasket.setBasketName("My Basket");
console.log(myRevealingBasket.printBasketName());

myRevealingBasket.printAllItems();
