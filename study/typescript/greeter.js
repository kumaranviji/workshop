var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    // console.log(labelledObj.label);
    var x = labelledObj.size;
    // console.log(++x);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var fruits = (function () {
    function fruits() {
        this.colorsArray = ['red', 'green', 'yellow', 'orange'];
    }
    return fruits;
}());
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = _this.colorsArray;
        return _this;
    }
    Apple.prototype.get = function () {
        return this.x;
    };
    Apple.prototype.getIndexByColor = function (color) {
        var y = this.get();
        for (var i = 0; i < y.length; i++) {
            if (y[i] === color) {
                return i;
            }
        }
        return null;
    };
    return Apple;
}(fruits));
var getObject = new Apple();
console.log(getObject.getIndexByColor('orange'));
