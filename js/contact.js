// ======================================================
// ACCOUNT SECTION
// ======================================================

//elements for desktop button
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

//welcome message for user
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//elements button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user 
if(localStorage.getItem("loggedIn") === "true"){

    //change login button to my account
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";

    //hide login icon
    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    //mobile version ng myaccount
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "./account.html";

}
else{
    //change to login button pag hindi naka login
    accountText.textContent = "";
    accountBtn.href = "./login.html";

    //show icon
    accountIcon.style.display = "inline";

    //mobile login button
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "./login.html";
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
// ======================================================
// BREADCRUMB
// ======================================================
document.getElementById("breadcrumb").innerHTML = `
    <a href="./index.html"
       class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <span>Contacts</span>
`;

// Button na magti-trigger ng toast
const toastTrigger = document.getElementById('toastBtn')

// Toast component
const toastLiveExample = document.getElementById('toast')

if (toastTrigger) {

    // Gumawa o kunin ang Bootstrap toast instance
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

  // Ipakita ang toast kapag pinindot ang button
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}