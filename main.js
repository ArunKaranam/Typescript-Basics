// function log(message) {
//   console.log(message);
// }
// log("hello");
//---------------------------------------------Typescript fundamentals-------------------------------//
//Declaring variables
//var count1=1;
//let count=1;
//Difference b/w let and var
// var is function scoped
// let is block scoped
//types in typescript
// let a: number;
// let b: string;
// let c: boolean;
// let d: any;
// let e: number[] = [1, 2, 2];
// let f: any[] = ["hi", 3];
// const colorRed = 0;
// //enum
// enum color {
//   Red,
//   Green,
//   blue,
// }
// let backgroundColor = color.Red;
//Type assertions
//let message;
// message='abc'
// let endsWith=(<string>message).endsWith('c')
// let alternativeWay=(message as string).endsWith('c');
//arrow functions
//let doLog=(message)=>console.log(message);
//inline annotations
//let drawPoint=(point:{x:number,y:number})=>{
// }
// drawPoint({
//     x:1,
//     y:2
// })
//Interfaces--only declaration no implementation
//To eliminate problems from inline annotations interfaces are introduced
// interface Point{
//     x:number,
//     y:number
// }
// let drawPoint=(point:Point)=>{
// }
// drawPoint({
//          x:1,
//        y:2
//     })
//classes-grouping members/variables/fields ,properties and functions/methods that are highly related
var Point = /** @class */ (function () {
  function Point() {}
  Point.prototype.draw = function () {
    console.log("X: " + this.x + ", Y: " + this.y);
  };
  Point.prototype.getDistance = function (another) {};
  return Point;
})();
//objects
var point = new Point();
point.x = 1;
point.x = 2;
point.draw();
