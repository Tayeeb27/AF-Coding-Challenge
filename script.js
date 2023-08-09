// Function to determine if a given number is prime
function isPrime(number) {
    // Handle special cases
    if (number <= 1) {
        return false; // 0 and 1 are not prime
    }
    if (number <= 3) {
        return true; // 2 and 3 are prime
    }
    
    // Check divisibility by 2 and 3
    if (number % 2 === 0 || number % 3 === 0) {
        return false; // Divisible by 2 or 3 = not prime
    }
    return true; // If none of the conditions matched, the number is prime
}

// Function to find factors of a given number
function findFactors(number) {
    const factors = []; // Initialize an array to store factors
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i); // If i divides number evenly, it's a factor
        }
    }
    return factors; // Return the array of factors
}

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
