// ==========================================
// ACCOUNT BUTTONS
// ==========================================
//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

// Get the section where the welcome message will be displayed
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");


// ==========================================
// CHECK LOGIN STATUS
// ==========================================

// Check if the user is logged in.
// If logged in, change the Login button to My Account
// and display the user's name.
if(localStorage.getItem("loggedIn") === "true"){

    accountText.textContent = "My Account";
    accountBtn.href = "../account/account.html";
    accountBtn.title = "My Account";

    // Hide the account icon
    accountIcon.style.display = "none";

    // Show the welcome message and username
    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    // Update the mobile account button
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "../account/account.html";
    mobileAccountBtn.title = "My Account";

}
else{
    //showing login buttons
    accountText.textContent = "";
    accountBtn.href = "../login/login.html";
    accountBtn.title = "Login";

    //show icon
    accountIcon.style.display = "inline";

    // Set the mobile button to Login
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "../login/login.html";
    mobileAccountBtn.title = "Login";
}

//========================
//LOGOUT FUNCTION
//========================
function logout(){

    // Remove login information from localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    // Return to the homepage
    window.location.href = "../homepage/main.html";
}

// Get cart items from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ito mag didisplay ng product using tbody
const cartItems = document.getElementById("cartItem");

// Get the subtotal element
const subtotal = document.querySelector(".subtotal");

// function to display cart items
function loadCart(){

    // clearing previous content
    cartItems.innerHTML = "";

    let totalPrice = 0;

    // Check if the cart is empty
    if(cart.length === 0){
        cartItems.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5">
                    Your cart is empty.
                </td>
            </tr>
        `;

        subtotal.textContent = "Subtotal: ₱0.00";
        return;
    }

     // Loop through each product in the cart
    cart.forEach((item, index) => {

        let price = item.price;
        let itemTotal = price * item.quantity;

        // Add the item total to the overall total
        totalPrice += itemTotal;

         // Display the product information in the table
        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₱${item.price}</td>
                <td>${item.quantity}</td>
                <td>₱${itemTotal.toLocaleString()}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });

    // Display the calculated subtotal
    subtotal.textContent = `Subtotal: ₱${totalPrice.toLocaleString()}`;
}

// removing item from cart
function removeItem(index){

    // Remove the selected item using its index
    cart.splice(index, 1);

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reload the cart display
    loadCart();
}

// loading cart when page opens
loadCart();

// Buy Now button
document.getElementById("buyNowBtn")
.addEventListener("click", function(){

    // Prevent checkout if the cart is empty
    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    // Redirect to the checkout page
    window.location.href =
        "../checkout/checkout.html";
});

