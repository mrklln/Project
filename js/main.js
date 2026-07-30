// =========================
// DESKTOP ACCOUNT ELEMENTS

//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

// WELCOME MESSAGE ELEMENTS
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

    // Palitan ang Login button ng My Account
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";
    accountBtn.title = "My Account";

    // Itago ang account icon
    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    // Mobile account button
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "./account.html";
    mobileAccountBtn.title = "My Account";

}
else{
    //showing login buttons
    accountText.textContent = "";
    accountBtn.href = "./login.html";
    accountBtn.title = "Login";

    // Ipakita ulit ang account icon
    accountIcon.style.display = "inline";

    // Mobile login button
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
//cart button pag hindi naka login iddirect sa login page
document.getElementById("cartBtn").addEventListener("click", function(e){
    //checking if the user currently login
    if(localStorage.getItem("loggedIn") !== "true"){

        // Pigilan muna ang default action
        e.preventDefault();

        //directing to login page
        window.location.href = "./login.html";
    }
    //if already login in directing to cart page
    else{
        //directing ti cart page
        window.location.href = "./cart.html";
    }

});

