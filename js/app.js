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
   };

    var data = {
       allItems: {
           exp: [],
           inc: []
       },
       totals: {
           exp: 0,
           inc: 0
       }
    };

    return { 
        addItem: function(type, des, val) {
           var newItem, ID;

         if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
         }else {
             ID = 0;
         }
 
           //Create new item based on 'inc' or 'exp' type
           if ( type === 'exp') {
              newItem = new Expense(ID, des, val);
           } else if (type === 'inc'){
              newItem = new Income(ID, des, val);
           }
           //Push it into our data structure
           data.allItems[type].push(newItem);

           // Return the new element
           return newItem;  
        }, 
         testing: function() {
            console.log(data);
         }


    };

})();

var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    // Some code
    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description :document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
      
        addListItem: function(obj, type) {
            var html, newHtml, element;
            //Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields;
            var fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + 
            DOMstrings.inputValue);
           
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, i, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();


var controller = (function(budgetCtrl, UICtrl) {

     var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAdditem);
        document.addEventListener('keypress', function(event) {
             if (event.keyCode === 13 || event.which === 13) {
                 ctrlAdditem();
             }
        });

     };
     
     var updateBudget = function() {
          // 1. Calculate the budget
           
          // 2. Return the budget

          // 3. Display the budget on the UI


     }



     var ctrlAdditem = function() {
            var input, newItem;
            // 1.Get the field input data
            var input = UICtrl.getInput();
            
            if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
                // 2. Add the item to the budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            // 4. clear fields
            UICtrl.clearFields();
            // 5. Calculate the budget
            updateBudget();


            }

           

     };


     return {
        init: function() {
             console.log('Application has started');
             setupEventListeners();
        }

     }

})(budgetController, UIController);

controller.init();

