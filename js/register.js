// ==========================================
// ACCOUNT BUTTON - DESKTOP VIEW
// ==========================================

// Kunin yung account button sa desktop
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

// Get the section where the welcome message will be displayed
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

// ==========================================
// CHECK LOGIN STATUS
// ==========================================
//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

    // Change the button text to "My Account"
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";
    accountBtn.title = "My Account";

    // Hide the account icon
    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    // Change the mobile button text to "My Account"
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "./account.html";
    mobileAccountBtn.title = "My Account";

}
else{
    //showing login buttons
    accountText.textContent = "";
    accountBtn.href = "./login.html";
    accountBtn.title = "Login";

     // Show the account icon
    accountIcon.style.display = "inline";

    // Change the mobile button text to "Login"
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "./login.html";
    mobileAccountBtn.title = "Login";
}

// ======================================================
// LOGOUT FUNCTION
// ======================================================
function logout(){

    //removed login status
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    // Redirect back to homepage
    window.location.href = "./index.html";
}

// ==========================================
// BREADCRUMB
// ==========================================
document.getElementById("breadcrumb").innerHTML = `
    <a href="./index.html"
       class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <span>Register</span>
`;

// ==========================================
// REGISTER FUNCTION
// ==========================================
//function for registering account via localstorage
function register(){

    // Get the first name from the input field
    // trim() removes extra spaces
    const firstName = document.getElementById("firstName").value.trim();

     // Get the last name from the input field
    const lastName = document.getElementById("lastName").value.trim();

     // Get the email from the input field
    const email = document.getElementById("email").value.trim();

     // Get the password from the input field
    const password = document.getElementById("password").value;

     // Get the confirmation password
    const confirmPassword = document.getElementById("confirmPassword").value;

     // Get the confirmation checkbox
    const confirmation = document.getElementById("confirmation");


    /// ==========================================
    // CHECK FOR EMPTY FIELDS
    // ==========================================
    if(firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "")
        {
        // Show a warning if a field is empty
        alert("Please fill in all fields.");

        // Stop the function
        return;
    }

    // ==========================================
    // CHECK IF PASSWORDS MATCH
    // ==========================================
    if(password !== confirmPassword){

        // Show an error if the passwords do not match
        alert("Passwords do not match.");
        return;
    }

    // ==========================================
    // CHECK CONFIRMATION CHECKBOX
    // ==========================================
    if(!confirmation.checked){

        // Show a warning if the checkbox is not selected
        alert("Please confirm the information.");
        return;
    }

    // ==========================================
    // CREATE USER DATA
    // ==========================================
    const user = {
        firstName,
        lastName,
        email,
        password
    };

     // ==========================================
    // SAVE USER TO LOCALSTORAGE
    // ========================================== 
    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    // Show a success message
    alert("Account created successfully!");

    // Redirect to login page
    window.location.href =
        "./login.html";
}