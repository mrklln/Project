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
    accountBtn.href = "/Project/account/account.html";

    //hide login icon
    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    //mobile version ng myaccount
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "/Project/account/account.html";

}
else{
    //change to login button pag hindi naka login
    accountText.textContent = "";
    accountBtn.href = "/Project/login/login.html";

    //show icon
    accountIcon.style.display = "inline";

    //mobile login button
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "/Project/login/login.html";
}


//logout function
function logout(){//logout on canvas
    localStorage.removeItem("loggedIn");//delete login information
    localStorage.removeItem("username");

    //back to homepage
    window.location.href = "/Project/homepage/main.html";
}

// ======================================================
// BREADCRUMB
// ======================================================
document.getElementById("breadcrumb").innerHTML = `
    <a href="/Project/homepage/main.html"
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