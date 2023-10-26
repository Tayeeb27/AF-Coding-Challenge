// Function to determine if a number is prime
const isPrime = number => findFactors(number).length === 2;

// Function to find factors of a given number
function findFactors(number) {
    const factors = []; // Array to store factors
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i); // If number divides by i evenly, it's a factor
        }
    }
    return factors; // Return the array of factors
}

function findPrimesBetween(min, max) {
  const primeNumbers = [];
  for(let i=min; i<=max;i++){
    if (isPrime(i)){
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

// alert(findPrimesBetween(1, 300))

// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('checkButton'); // Get the Check button element
    const numberInput = document.getElementById('numberInput'); // Get the number input element
    const resultElement = document.getElementById('result'); // Get the result paragraph element
    
    // Add click event listener to the Check button
    checkButton.addEventListener('click', () => {
        const inputNumber = parseInt(numberInput.value); // Parse the input value as an integer
        
        if (isNaN(inputNumber)) {
            // Handle invalid input
            resultElement.textContent = 'Please enter a valid number.';
            return;
        }
        
        if (isPrime(inputNumber)) {
            // Display "Prime!" if the input number is prime
            resultElement.textContent = 'Prime!';
        } else {
            // Display factors if the input number is not prime
            const factors = findFactors(inputNumber);
            resultElement.textContent = `Not Prime. Factors: ${factors.join(', ')}`;
        }
    });
});
