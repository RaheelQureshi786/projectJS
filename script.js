document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid =true;

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Invalid email format";
        emailError.style.color = "red";
        isValid = false;
    } else{
        emailError.textContent = "";
    }
    

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        passwordError.textContent = "Password must be at least 8 chars, 1 uppercase, 1 number";
        passwordError.style.color = "red";
        isValid = false; 
    }
    else{
        passwordError.textContent= "";
    }

    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError")
    if(confirmPassword !== password){
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.color = "red";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    let number = document.getElementById("number").value;
    let numberError = document.getElementById("numberError");
    if (!/^\d{10}$/.test(number)) {
        numberError.textContent = "phone number must be 10 digits";
        numberError.style.color = "red";
        isValid = false;
    } else{
        numberError.textContent = "";
    }


    let age = document.getElementById("age").value;
    let ageError = document.getElementById("ageerror");
    if(age < 18 || age > 100){
        ageError.textContent = "Age must be between 18 and 100";
        isValid = false;
    } else{
        ageError.textContent = "";
    }

    let otp = document.getElementById("otp").value;
    let otpError = document.getElementById("otperror");
    if (otp.trim() === "") {
        otpError.textContent = "Please generate and enter OTP";
        isValid = false;
    } else {
        otpError.textContent = "";
    }

    if (isValid) {
        alert("Form Submitted Successfully!");
        // You can also submit the form manually here if needed
    }

 
});

document.getElementById('generateOtp').addEventListener('click', function() {
    const phoneInput = document.getElementById('number');
    const phoneError = document.getElementById('numberError');
    const otpInput = document.getElementById('otp');
    
    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must be 10 digits";
        return;
    } else {
        phoneError.textContent = ""; // Clear error if valid
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpInput.value = otp;

    // Simulate sending OTP (replace with actual API call)
    console.log(`OTP ${otp} would be sent to ${phoneInput.value}`);
    alert(`OTP generated: ${otp}\n`);
});

// Add this if you want to auto-validate phone on input
document.getElementById('number').addEventListener('input', function() {
    const phoneError = document.getElementById('numberError');
    if (!/^\d{10}$/.test(this.value)) {
        phoneError.textContent = "Phone number must be 10 digits";
    } else {
        phoneError.textContent = "";
    }
});
