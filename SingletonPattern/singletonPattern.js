var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var BadSingleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      instance = createInstance();
      return instance;
    },
  };
})();

// Creating two new instances using Singleton pattern
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance2 === instance1 ? "It is equal" : "It is not equal");

// An Example of using a Bad singletone pattern
var instance1 = BadSingleton.getInstance();
var instance2 = BadSingleton.getInstance();

// Two new instancs will be created in this case
console.log(instance2 === instance1 ? "It is equal" : "It is not equal");
