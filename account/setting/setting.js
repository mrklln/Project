
//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

    accountText.textContent = "My Account";
    accountBtn.href = "/Project/account/account.html";
    accountBtn.title = "My Account";

    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "/Project/account/account.html";
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
//logout function
function logout(){
    //removed login status
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");//remove saved username
    window.location.href = "../homepage/main.html";//redirecting to homepage
}

// Load saved data
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("usernameInput").value =
        localStorage.getItem("username") || "";

    document.getElementById("emailInput").value =
        localStorage.getItem("email") || "";

});


// Save username and email
function saveProfile() {

    const username =
        document.getElementById("usernameInput").value;

    const email =
        document.getElementById("emailInput").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    alert("Profile updated successfully!");

}


// Change password
function changePassword() {

    const password =
        document.getElementById("passwordInput").value;

    if(password.trim() === ""){

        alert("Please enter a password.");
        return;

    }

    localStorage.setItem("password", password);

    alert("Password changed successfully!");

    document.getElementById("passwordInput").value = "";

}


// Logout
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href =
        "/Project/homepage/main.html";

}

localStorage.setItem("loggedIn", "true");
localStorage.setItem("username", "Mark");
localStorage.setItem("email", "admin@zentech.com");
localStorage.setItem("password", "123456");


document.getElementById("breadcrumb").innerHTML = `
    <a href="/Project/homepage/main.html"
       class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <a href="/Project/account/account.html"
       class="text-decoration-none fw-bold text-dark">
       My Account
    </a>
    >
    <span>Settings</span>
`;