var n = prompt("Enter your nickname:");
var h = parseFloat(prompt("Enter your height (in inches)", "0"));
var w = parseFloat(prompt("Enter your weight (in kilograms)", "0"));

var wfinal = (w*2.205).toFixed(3);
var r = h % 12;
var hfinal = (h/12).toFixed(0);

if (confirm("Do you agree to share your information with our site?")) {
   console.log("Name: " + n);
   console.log("Height: " + hfinal + "'" + r + "''");
   console.log("Weight: " + wfinal + " lbs");
}
else{
   console.log("User does not wish to share his/her information.");
}