// Data encpasulation - making pieces of code private and exposing only the necessary through APIS


// BUDGET CONTROLLER
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var data = {
    allItems = {
      inc: [],
      exp: [],
    },
    totals = {
      exp: 0,
      inc: 0,
    }
  }
})();

// separated from the data -- separation of concerns -- each module should do things independently

// BUT YOU HAVE TO CONNECT THEM...


// UI CONTROLLER
var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Will be eiher inc or exp
        description: document.querySelector(DOMStrings.inputValue).value,  
        value: document.querySelector(DOMStrings.inputDescription).value,
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };

})();

// ... IN THE APP CONTROLLER

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) { // change the controller names to keep app controller independent

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
  
    document.addEventListener('keypress', function(e) {
      if(e.keyCode === 13 || event.which === 13) { // for browsers that don't have the keyCode property
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {

    // 1. get the field input data
    var input = UICtrl.getInput();

    // 2. add item to the budget controller
    // 3. add the item to the ui
    // 4. calculate the budget
    // 5. display the budget

    console.log('It works');
  }

  return {
    init: function() {
      console.log('wjagvfdafy');
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init(); // the ONLY line of code that is outside of a controller