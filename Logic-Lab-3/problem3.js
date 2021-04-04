function Function(i, j) {
    var a = 0;
    for (i; i <= j; i++) {
        if (i % 2 != 0) {
            a = a + i;
        }
    }
    return a;
}


// const addOdd = (x, y)=> {
//     let a=0;
//     for(let i =x; i<=y;i++){
//         if(i%2 !== 0){
//             a=a+i;
//         }
//     }
//     return a;
// }
// console.log(addOdd(1,5));