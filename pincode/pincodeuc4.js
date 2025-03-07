// Function to validate the PIN code
function validatePIN(pin) {
    // Regular expression to match exactly 6 digits with an optional space between them
    const pinPattern = /^[0-9]{3}\s?[0-9]{3}$/;
    
    // Test if the PIN matches the pattern
    return pinPattern.test(pin);
}

// Example usage
const pinCode1 = "400088";   
const pinCode2 = "400 088";  
const pinCode3 = "400088B";  

console.log(validatePIN(pinCode1));
console.log(validatePIN(pinCode2)); 
console.log(validatePIN(pinCode3)); 
