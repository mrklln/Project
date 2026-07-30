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
    <span>Peripherals</span>
`;

// FILTER SECTION

//for search bar
const searchInput = document.getElementById("searchInput");

//for brand filter
const brandFilter = document.getElementById("brandFilter");

//for sorting
const sortFilter = document.getElementById("sortFilter");

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

    // Ibalik ang sorted products sa container
    products.forEach(product => productRow.appendChild(product)
    );

});

// SEARCH AND BRAND FILTER
function filterProducts() {

    // SEARCH AND BRAND FILTER
    const searchValue = searchInput.value.toLowerCase();

    // SEARCH AND BRAND FILTER
    const brandValue = brandFilter.value;

     // Kunin lahat ng product cards
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
        if(matchesSearch && matchesBrand){ 
            product.style.display = "";
        }
        else{ // Hide product if not matched
            product.style.display = "none";
        }

    });
}

// EVENT LISTENERS

// Real-time search habang nagta-type
searchInput.addEventListener("keyup", filterProducts);

// Filter kapag nagpalit ng brand
brandFilter.addEventListener("change", filterProducts);