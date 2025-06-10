
const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    const lenpassword = 12; // You can change the length of the password here
    for(let i = 0; i < lenpassword; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
        console.log(password);
    }

    passwordBox.value = password;
};

button.addEventListener("click", generatePassword);
copyButton.addEventListener("click", () => {
    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy){
    alert("No password to copy! Please generate a password first.");
    return;
    }

    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password copied to clipboard!");
    });
});