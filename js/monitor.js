//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

//welcome message
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

    //login button to my account
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";

    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    //mobile login to myaccount
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "./account.html";

}
else{
    //showing login buttons
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

//fillter section
const searchInput = document.getElementById("searchInput");//for search bar
const brandFilter = document.getElementById("brandFilter");//for brand filter
const sortFilter = document.getElementById("sortFilter");//for sorting

//sorting products by price
sortFilter.addEventListener("change", () => {

    //getting container that holding products
    const productRow = document.getElementById("productRow");

    //convert products to array
    const products = Array.from(document.querySelectorAll(".product-item"));

    //sort low price to highes
    if(sortFilter.value === "low"){

        products.sort((a,b)=> Number(a.dataset.price) - Number(b.dataset.price));

    }
    // sort high price to lowest
    else if(sortFilter.value === "high"){

        products.sort((a,b)=> Number(b.dataset.price) - Number(a.dataset.price));
    }

    products.forEach(product => productRow.appendChild(product)
    );

});

//search and brand filter
function filterProducts() {

    //lowering the texts
    const searchValue = searchInput.value.toLowerCase();

    //get the selected brand
    const brandValue = brandFilter.value;

    //get all products card
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {

        //get product name from card
        const productName = product.querySelector(".product-name") .textContent .toLowerCase();

        // Get brand from data-brand attribute
        const productBrand =product.dataset.brand;

         // Check if product name matches search
        const matchesSearch = productName.includes(searchValue);

        // Check if brand matches selected brand
        const matchesBrand = brandValue === "all" || productBrand === brandValue;

        // Show product if both conditions are true
        if(matchesSearch && matchesBrand){ product.style.display = "";
        }
        else{ // Hide product if not matched
            product.style.display = "none";
        }

    });
}
//==========================
//EVENT LISTENER
//==========================
searchInput.addEventListener("keyup", filterProducts);
brandFilter.addEventListener("change", filterProducts);

//==========================
//BREADCRUMB
//==========================
document.getElementById("breadcrumb").innerHTML = `
    <a href="./index.html"
       class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <span>Monitors</span>
`;