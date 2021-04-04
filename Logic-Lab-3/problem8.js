function radomnb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function equal(nb1, nb2) {
    return nb1 == nb2;
}


function Function() {
    const m = radomnb(1, 30);
    for (var i = 0; i < 5; i++) {
        var n = prompt("Know the random number. \nEnter a guesses : ");
        if (equal(n, m)) {
            alert("Right!");
            break;
        }
        else {
            alert("Wrong!");
        }
    }
}