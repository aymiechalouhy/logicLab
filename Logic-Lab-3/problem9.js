function Function(number) {
  var n = number;
  var s = [0, 1];
  if (n > 1) {
    for (i = 2; i <= n; i++) {
      s.push(s[i - 1] + s[i - 2]);
    }
  }
  alert(s[n]);
}


// function a(){

//   var nb = parseInt(prompt("number: "));
//   var fab_nab = [0, 1];
//   let i;
//   for (i = 2; i <= nb; i++) { fab_nab[i] = fab_nab[i - 2] + fab_nab[i - 1]; }
//   console.log(fab_nab[nb]);
//   alert(fab_nab[nb]);

// }
