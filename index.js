var spider = {
    name: "wakapow",
    hasHoney: false,
};
// Strings -> stores textual data
var x = "x";
var y = "y";
// strings can span multiple lines
var sentence = "xxx\nxxx\n";
// Boolean  -> type stores either a binary value either true or false
var isReady = true;
// Number in typescript
var decimal = 10;
var hexadecimal = 0x00d;
var binary = 10;
// Arrays
var myArray = ["mango", "apple", "banana", "ice-cream"];
var secondArray = ["bread", "pastries", "rice"];
// union types in arrays
var unionArrays = [1, "a", 2, "3"];
var secondUnionArrays = ["hello", 1, 2, "typescript", 3];
var add = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
var Colors;
(function (Colors) {
    Colors["red"] = "#ff0000";
    Colors["Green"] = "#00ff00";
    Colors["blue"] = "#0000ff";
})(Colors || (Colors = {}));
//# sourceMappingURL=index.js.map