function checkName(name) {
    // Check if input is a string
    if (typeof name !== 'string') {
        return "invalid";
    }

    // Extract the last character of the name
    const lastChar = name.charAt(name.length - 1);

    // Check if the last character is one of the forbidden characters
    const forbiddenChars = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (forbiddenChars.includes(lastChar.toLowerCase())) {
        return "Good Name";
    } else {
        return "bad name";
    }
}

// Test cases
console.log(checkName("Salman"));   // Output: Bad Name
console.log(checkName("RAFEE"));    // Output: Good Name
console.log(checkName("Jhankar"));  // Output: Bad Name
console.log(checkName("199"));      // Output: invalid
console.log(checkName(["Rashed"])); // Output: invalid
