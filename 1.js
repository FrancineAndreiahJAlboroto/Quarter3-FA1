var n = prompt("Enter your nickname:"); 
var h = parseFloat(prompt("Enter your height (in inches)", "0"));
var w = parseFloat(prompt("Enter your weight (in kilograms)", "0"));
   
var wfinal = (w*2.20462).toFixed(3);
var r = h % 12;
var hfinal = (h/12).toFixed(0);
   
alert("Name: " + n + 
      "\nHeight: " + hfinal + "'" + r + "''" +
      "\nWeight: " + wfinal + " lbs");
