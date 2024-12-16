// 1. Email Validation
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "example@email.com";
console.log("Email validation for '" + email + "': " + emailRegex.test(email));

// 2. Phone Number Validation (US format)
let phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
let phoneNumber = "123-456-7890";
console.log("Phone number validation for '" + phoneNumber + "': " + phoneRegex.test(phoneNumber));

// 3. Extracting Specific Words (e.g., words starting with a capital letter)
let sentence = "JavaScript is a popular Programming language developed by Netscape.";
let wordRegex = /\b[A-Z][a-z]*\b/g;
let capitalizedWords = sentence.match(wordRegex);
console.log("Capitalized words in sentence: " + capitalizedWords.join(", "));

// 4. Replacing Parts of a String (masking email domain)
let maskedEmail = email.replace(/@[\w.-]+/, "@****.com");
console.log("Masked email: " + maskedEmail);

// 5. Splitting a String (splitting by whitespace)
let words = sentence.split(/\s+/);
console.log("Words in sentence: " + words);
