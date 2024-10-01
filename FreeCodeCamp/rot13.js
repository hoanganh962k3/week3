function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let asciiValue = str.charCodeAt(i);
        let newAsciiValue;

        // Check if the character is an uppercase letter
        if (asciiValue >= 65 && asciiValue <= 90) {
            // Perform the ROT13 transformation
            newAsciiValue = ((asciiValue - 65 + 13) % 26) + 65;
        } else {
            // If it's not a letter, keep it unchanged
            newAsciiValue = asciiValue;
        }

        // Append the new character to the result
        result += String.fromCharCode(newAsciiValue);
    }
    return result;
}

// Example usage:
console.log(rot13("SERR PBQR PNZC")); // Outputs: 'FREE CODE APL'
