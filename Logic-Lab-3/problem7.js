function Function(number) {
    let isPrime = true;
    if (number == 0) {
        alert("Undefined.")
    }
    else {
        if ((number != 1) && (number != -1)) {
            if (number > 0) {
                for (let i = 2; i < number; i++) {
                    if (number % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                isPrime ?
                    alert(`${number} is a Prime number.`) :
                    alert(`${number} is a Not Prime number.`);
            }
            else {
                for (let i = -2; i > number; i--) {
                    if (number % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                isPrime ?
                    alert(`${number} is a Prime number.`) :
                    alert(`${number} is a Not Prime number.`);
            }
        }
        else {
            alert(`${number} is a Prime number.`);
        }
    }
}


// function isprime(number) {
//     if (number == 1) {
//       return "this a prime number";
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//           return "is not prime";
//         }
//       }
//       return "is prime";
//     }
//   }
//   console.log(isprime(25));
//   console.log(isprime(3));
  