function palindrome(str) {
    // Step 1: Remove all non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Step 2: Check if the cleaned string is equal to its reverse
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }