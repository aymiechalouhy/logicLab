const a = prompt("Tell me which month please:");
var c = a.toLowerCase();
switch (true) {
    case (a == "December" || a == "January" || a == "February"):
        alert(" We are in winter.");
        break;
    case (a == "March" || a == "April" || a == "May"):
        alert(" We are in Spring.");
        break;
    case (a == "June" || a == "July" || a == "August"):
        alert(" We are in Summer.");
        break;
    case (a == "September" || a == "October" || a == "November"):
        alert(" We are in Fall.")
        break;
}