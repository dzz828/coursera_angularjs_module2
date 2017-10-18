(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.toBuyItems = ShoppingListCheckOffService.getToBuy();
        toBuy.onBuying = function (item) {
            ShoppingListCheckOffService.buy(item);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.boughtItems = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuys =
            [
                { name: "cookies", quantity: 10 },
                { name: "chips", quantity: 4 },
                { name: "coke", quantity: 5 },
                { name: "fish", quantity: 1 },
                { name: "chicken", quantity: 2 }
            ];
        var bought = [];

        service.getToBuy = function () {
            return toBuys;
        };

        service.getBought = function () {
            return bought;
        };

        service.buy = function (index) {
            bought.push(toBuys[index]);
            toBuys.splice(index, 1);
        }
    }
})();