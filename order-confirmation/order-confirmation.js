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

    // Change Login button to My Account
    accountText.textContent = "My Account";
    accountBtn.href = "../account/account.html";
    accountBtn.title = "My Account";

    // Hide login icon
    accountIcon.style.display = "none";

      // Show welcome message with username
    userSection.classList.remove("d-none");
    userName.textContent = localStorage.getItem("username");

    // Mobile version of My Account
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "../account/account.html";
    mobileAccountBtn.title = "My Account";

}
else{
    //showing login buttons
    accountText.textContent = "";
    accountBtn.href = "../login/login.html";
    accountBtn.title = "Login";

    // Show login icon
    accountIcon.style.display = "inline";

    // Mobile Login button
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "../login/login.html";
    mobileAccountBtn.title = "Login";
}


// ======================================================
// LOGOUT FUNCTION
// ======================================================
function logout(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "../homepage/main.html";
}

// ======================================================
// GET LATEST ORDER
// ======================================================

// Retrieve the latest order from localStorage
const order = JSON.parse(localStorage.getItem("latestOrder"));

// Check if an order exists
if(order){

    // Generate and display a random order number
    document.getElementById("orderNumber").textContent = "#ZT" + Math.floor(100000 + Math.random() * 900000);

    // Display estimated delivery date
    document.getElementById("deliveryDate") .textContent = order.deliveryDate;

     // Display customer name
    document.getElementById("customerName") .textContent = order.customerName;

    // Display delivery address
    document.getElementById("deliveryAddress") .textContent = order.address;

     // Display selected payment method
    document.getElementById("paymentMethod") .textContent = order.paymentMethod;

    // ==================================================
    // ORDER SUMMARY
    // ==================================================

    // Table body for purchased items
    const orderItems = document.getElementById("orderItems");

    // Total amount element
    const orderTotal = document.getElementById("orderTotal");

    // Variable for storing total price
    let total = 0;

    // loop through every purchased item in the order
    order.items.forEach(item => {

        //converting product price into number
        const price = Number(item.price);

        //calculate total price of prodcut
        const itemTotal = price * item.quantity;

        // add item total to the grand total
        total += itemTotal;

        // display the product in the order summary table
        orderItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₱${price.toLocaleString()}</td>
                <td>${item.quantity}</td>
                <td>₱${itemTotal.toLocaleString()}</td>
            </tr>
        `;
    });

    // Display total order amount
    orderTotal.textContent = `₱${total.toLocaleString()}`;
}

// ======================================================
// BREADCRUMB
// ======================================================

// Display current page location
document.getElementById("breadcrumb").innerHTML = `
    <a href="../homepage/main.html" class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <a href="../cart/cart.html" class="text-decoration-none fw-bold text-dark">
       Cart
    </a>
    >
    <a href="../checkout/checkout.html" class="text-decoration-none fw-bold text-dark">
       Checkout
    </a>
    >
    <span>
       Order Confirmation
    </span>
`;