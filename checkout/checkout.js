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
    accountBtn.href = "../account/account.html";
    accountBtn.title = "My Account";

    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

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
//logout button
function logout(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "../homepage/main.html";
}
// Place Order Button
document.getElementById("placeOrderBtn").addEventListener("click", function(){

    // Kunin lahat ng products sa cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Gumawa ng estimated delivery date (+3 days)
    const deliveryDate = new Date();

    deliveryDate.setDate(deliveryDate.getDate() + 3);
    
    // Gumawa ng order object
    const order = {

     // Unique Order ID
    orderId: "ZT" + Date.now(),

    // Mga products na inorder
    items: cart,

    // Customer information
    customerName: document.getElementById("fullName").value,
    address: document.getElementById("address").value,
    paymentMethod: document.getElementById("paymentMethod").value,

     // Dates
    deliveryDate: deliveryDate.toLocaleDateString(),
    orderDate: new Date().toLocaleDateString(),

    // Current order status
    status: "Processing",

    // Save total amount for Order History
    total: total
    };
    
    // Kunin existing orders
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // I-add ang bagong order
    orders.push(order);

    // Save sa localStorage
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("latestOrder", JSON.stringify(order));

    // Clear cart pagkatapos mag-checkout
    localStorage.removeItem("cart");

    // Redirect sa confirmation page
    window.location.href =
    "../order-confirmation/order-confirmation.html";
});

// =========================
// ORDER SUMMARY SECTION
// =========================

// Kunin ulit cart data
const cart = JSON.parse(localStorage.getItem("cart")) || [];


// Container ng products
const summary = document.getElementById("checkoutSummary");


// Total text element
const totalElement = document.getElementById("checkoutTotal");


// Initial total
let total = 0;

// I-display lahat ng products sa summary
cart.forEach(item => {

    total += Number(item.price) * item.quantity;

    summary.innerHTML += `
        <p>
            ${item.name}
            x${item.quantity}
        </p>
    `;
});
// Display total amount
totalElement.textContent =
    `Total: ₱${total.toLocaleString(undefined,
        {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }
)}`;