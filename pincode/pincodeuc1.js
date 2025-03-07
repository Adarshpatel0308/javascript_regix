// Function to validate PIN code
function validatePIN(pin) {
    // Regular expression to match exactly 6 digits
    const pinPattern = /^\d{6}$/;
    
    // Test if the PIN matches the pattern
    return pinPattern.test(pin);
}

// Example usage
const pinCode = "400088"; 

if (validatePIN(pinCode)) {
    console.log(`${pinCode} is a valid PIN code.`);
} else {
    console.log(`${pinCode} is an invalid PIN code.`);
}
