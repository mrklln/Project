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
    <span>PC Parts</span>
`;


// ======================================================
// SEARCH, FILTER, AT SORTING
// ======================================================

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

    //get all products card
    const products = Array.from(document.querySelectorAll(".product-item"));

    //sort low price to highes
    if(sortFilter.value === "low"){

        products.sort((a,b)=> Number(a.dataset.price) - Number(b.dataset.price));

    }
    // sort high price to lowest
    else if(sortFilter.value === "high"){

        products.sort((a,b)=> Number(b.dataset.price) - Number(a.dataset.price));
    }

    // change to proper product position
    products.forEach(product => productRow.appendChild(product)
    );
    changePage(1);
});

//search and brand filter
function filterProducts() {

    const searchValue = searchInput.value.toLowerCase();//lowering the texts
    const brandValue = brandFilter.value;//get the selected brand

    const products = document.querySelectorAll(".product-item");//get all products card

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
            product.dataset.filtered = "true";
        }
        else{
            product.dataset.filtered = "false";
        }
    });
    //back to page 1 after filter
    changePage(1);
}


//event listener
// Real-time search habang nagta-type
searchInput.addEventListener("keyup", filterProducts);

// Real-time search habang nagta-type
brandFilter.addEventListener("change", filterProducts);


// ======================================================
// PAGINATION
// ======================================================

//current page
let currentPage = 1;

//number of product per page
const productsPerPage = 9;

function changePage(page){

    //get products only on filter
    const products = Array.from(document.querySelectorAll(".product-item")).filter(product => product.dataset.filtered !== "false");

    //calculate of total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    //hindi tutuloy pag nag invalid
    if(page < 1 || page > totalPages){
        return;
    }

    currentPage = page;

    //start ng product sa page
    const start = (page - 1) * productsPerPage;

    //last na product sa page
    const end = start + productsPerPage;

    //hide all products
    document.querySelectorAll(".product-item").forEach(product => {
        product.style.display = "none";
    });

    //show all products on current page
    products.forEach((product,index)=>{
        if(index >= start && index < end){
            product.style.display = "";
        }
    });

    //remove active state sa page button
    document.querySelectorAll(".page-item").forEach(btn =>
        btn.classList.remove("active"));

    document.getElementById("pageBtn" + page).classList.add("active");

    // Previous button
    if(page === 1){
        document.getElementById("prevBtn")
            .classList.add("disabled");
    }
    else{
        document.getElementById("prevBtn")
            .classList.remove("disabled");
    }

    // Next button
    if(page === totalPages){
        document.getElementById("nextBtn")
            .classList.add("disabled");
    }
    else{
        document.getElementById("nextBtn")
            .classList.remove("disabled");
    }

}

//mark all products visible
document.querySelectorAll(".product-item").forEach(product => {
        product.dataset.filtered = "true";
    });
    //load page 1 
changePage(1);