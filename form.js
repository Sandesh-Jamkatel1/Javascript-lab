function validateForm(event) {
    event.preventDefault();  // Prevent form from submitting

    let userName = document.getElementById('userName').value.trim();
    let rollNumber = document.getElementById('rollNumber').value;
    let dateOfBirth = document.getElementById('dateOfBirth').value;
    let userGenderMale = document.getElementById('genderMale').checked;
    let userGenderFemale = document.getElementById('genderFemale').checked;
    let phone = document.getElementById('phone').value.trim();

    let hasError = false;

    // Clear previous error messages
    document.getElementById('personalInfoValidation').innerHTML = "";
    document.getElementById('rollNumberValidation').innerHTML = "";
    document.getElementById('birthInformationValidation').innerHTML = "";
    document.getElementById('genderInformationValidation').innerHTML = "";
    document.getElementById('phoneInformationValidation').innerHTML = "";

    // Username validation
    if (!userName) {
        document.getElementById('personalInfoValidation').innerHTML = "User name is required";
        hasError = true;
    }

    // Roll number validation
    if (!rollNumber) {
        document.getElementById('rollNumberValidation').innerHTML = "Roll number is required";
        hasError = true;
    }

    // Date of birth validation
    if (!dateOfBirth) {
        document.getElementById('birthInformationValidation').innerHTML = "Date of birth is required";
        hasError = true;
    }

    // Gender validation
    if (!userGenderMale && !userGenderFemale) {
        document.getElementById('genderInformationValidation').innerHTML = "Gender selection is required";
        hasError = true;
    }

    // Phone validation
    if (!phone) {
        document.getElementById('phoneInformationValidation').innerHTML = "Phone number is required";
        hasError = true;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneInformationValidation').innerHTML = "Phone number must be 10 digits";
        hasError = true;
    }

    if (!hasError) {
        alert("Form submitted successfully!");
        document.getElementById("userForm").submit(); // Submit form if no errors
    }
}