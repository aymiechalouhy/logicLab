var a = prompt("Enter 1st number ");
var b = prompt("Enter 2nd number ");
var c = prompt("Enter 3rd number ");

var num1 = parseInt(a);
var num2 = parseInt(b);
var num3 = parseInt(c);

if (num1 == num2 == num3) { alert("True, the three numbers are eqaul"); }
else { alert("False, the three numbers are not eqaul"); }

if (num3 > num2 && num2 > num1) { alert("True, c > b >a"); }
else { alert("False, c > b >a eqaution is not true"); }

if ((num1 == num2) || (num2 == num3) || (num1 == num3)) { alert("True, tow numbers are eqaul"); }
else { alert("False, There is no number equal to the othe"); }
