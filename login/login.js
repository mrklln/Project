// ======================================================
// ACCOUNT SECTION
// ======================================================

//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

// Welcome message elements
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

     // Palitan ang Login button ng My Account
    accountText.textContent = "My Account";
    accountBtn.href = "../account/account.html";
    accountBtn.title = "My Account";

    // hide the login icon
    accountIcon.style.display = "none";

     //show welcome message with username
    userSection.classList.remove("d-none");
    userName.textContent = localStorage.getItem("username");

    // Mobile version ng My Account
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "../account/account.html";
    mobileAccountBtn.title = "My Account";

}
else{
    //showing login buttons
    accountText.textContent = "";
    accountBtn.href = "../login/login.html";
    accountBtn.title = "Login";

    accountIcon.style.display = "inline";

    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "../login/login.html";
    mobileAccountBtn.title = "Login";
}

// ======================================================
// LOGIN FUNCTION
// ======================================================

//login function chinicheck kung tama yumg email at password
function login() {
    // Get values from input fields
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Get registered user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

     // Admin account credentials
    if(email === "admin@zentech.com" && password === "1234567890"){
        // Save login session
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", "Admin");

        // Redirect to homepage
        window.location.href = "../homepage/main.html";

        return;
    }

    // Registered User from register.js
    if(user && email === user.email && password === user.password)
    {
        // Save login session
        localStorage.setItem("loggedIn", "true");

        // Save user's first name
        localStorage.setItem("username",user.firstName);

        // Redirect to homepage
        window.location.href = "../homepage/main.html";
    }
    else{
        // Show error if credentials are incorrect
        alert("Invalid email or password");
    }
}

// ======================================================
// LOGOUT FUNCTION
// ======================================================
function logout(){

    //removed login status
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    // Redirect back to homepage
    window.location.href = "../homepage/main.html";
}

// ======================================================
// ENTER KEY LOGIN
// ======================================================

// Allow login when pressing Enter in password field
document.getElementById("password").addEventListener("keydown", function(e){
    if(e.key === "Enter"){
         // Trigger login function
        login();
    }
});

// ======================================================
// BREADCRUMB
// ======================================================
document.getElementById("breadcrumb").innerHTML = `
    <a href="../homepage/main.html"
       class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <span>Login</span>
`;

