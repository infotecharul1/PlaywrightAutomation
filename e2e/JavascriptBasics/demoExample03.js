var m = 10;
var flag = true;

function demoVar() {
  var demo = 20;
  console.log(m); // Should log 10
  console.log(flag); // Should log true
}
var demo = 30; // This will not affect the variable inside the function
console.log(demo); // Outputs: 30
demoVar();
