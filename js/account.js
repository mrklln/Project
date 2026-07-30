//======================
//DESKTO BUTTON 
//=======================
//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

//WELCOME MESSAGE
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

    // Change the button text to "My Account"
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";
    accountBtn.title = "My Account";

    //HIDE ICON
    accountIcon.style.display = "none";

    //WELCOME MESSAGE WITH USERNAME
    userSection.classList.remove("d-none");
    userName.textContent = localStorage.getItem("username");

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

// =======================
// PROFILE INFORMATION
// =======================

document.getElementById("profileName").textContent =
    localStorage.getItem("username") || "Guest";

document.getElementById("profileEmail").textContent =
    localStorage.getItem("email") || "No Email";


    
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
